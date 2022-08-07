import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, take, takeUntil } from 'rxjs';
import { IListConfig, IPokemonList } from 'src/app/common/interfaces';
import { PokeApiService } from 'src/app/common/services/poke-api.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  public configList!: IListConfig;
  public tableShow!: IPokemonList;
  public tableComplete!: IPokemonList;
  public isLoading$: Subject<boolean>;
  private unsubscribe$: Subject<void>;
  constructor(private pokeApi: PokeApiService) {
    this.unsubscribe$ = new Subject();
    this.isLoading$ = new Subject();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.initResources();
  }
  private async initResources() {
    try {
      this.configList = await this.pokeApi.getListConfig();
      console.log('condifg',this.configList);
      const response = await this.pokeApi.getList(0, this.configList.count);
      this.tableComplete = {...response};
      this.tableShow = {...response};
      this.configTableShow();
    } catch (e) {
      // console.log(e);
    }
  }
  
  private configTableShow() {
    const start = (this.configList.page-1) * this.configList.pageSize;
    console.log('page',this.configList.page-1);
    console.log('pagintaion',this.configList.pageSize);
    console.log('start',start);
    const end =
      this.configList.count < start + this.configList.pageSize
        ? this.configList.count-1
        : start + this.configList.pageSize;
    console.log('end',end);
    this.tableShow.results =  this.tableComplete.results.slice(start, end);
    console.log('tableshow',this.tableShow);
    console.log('tablecompelte',this.tableComplete);
  }
  onChangePage(newPage: number){
    try{
      this.isLoading$.next(true);
      this.configList.page=newPage;
      this.configTableShow();

    }catch(e){

    }finally{
      this.isLoading$.next(false);
    }
  }
  onChangePagination(newPagination: number){
    console.log('newPagintatyo',newPagination)
    this.configList.pageSize=newPagination;
    this.onChangePage(1);
  }
  public onSearchedKeyUp() {}
  public onSearchedBackSpace() {}
  public onSearched() {}
}
