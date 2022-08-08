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
  public oldConfiglist!: IListConfig;
  public tableShow!: IPokemonList;
  public tableTemp!: IPokemonList;
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

  onChangePage(newPage: number) {
    try {
      this.isLoading$.next(true);
      this.configList.page = newPage;
      this.configTableShow();
    } catch (e) {
    } finally {
      this.isLoading$.next(false);
    }
  }
  onChangePagination(newPagination: number) {
    this.configList.pageSize = newPagination;
    this.onChangePage(1);
  }
  onSearchedKeyUp(writingWord: string) {
    if (writingWord.length <= 2) {
      if (this.tableTemp != this.tableComplete) {
        this.tableTemp = { ...this.tableComplete };
      }
      if (this.configList != this.oldConfiglist) {
        this.configList.count = this.oldConfiglist.count;
      }
      this.onChangePage(1);
      return;
    }
    writingWord = writingWord.toLowerCase();
    this.tableTemp.results = this.tableComplete.results.filter(val => val.name.search(writingWord)>=0);
    this.configList.count = this.tableTemp.results.length;
    this.onChangePage(1);
  }
  
  onSearched(searchWord: string) {
    this.onSearchedKeyUp(searchWord);
  }

  private async initResources() {
    try {
      this.configList = await this.pokeApi.getListConfig();
      this.oldConfiglist = { ...this.configList };
      const response = await this.pokeApi.getList(0, this.configList.count);
      this.tableComplete = { ...response };

      this.tableComplete.results.forEach((val, index) => {
        val.id = index + 1;
      });
      this.tableTemp = { ...this.tableComplete };
      this.tableShow = { ...this.tableComplete };

      this.configTableShow();
    } catch (e) {
      // console.log(e);
    } finally {
    }
  }

  private configTableShow() {
    const start = (this.configList.page - 1) * this.configList.pageSize;
    const end =
      this.configList.count < start + this.configList.pageSize
        ? this.configList.count
        : start + this.configList.pageSize;
    this.tableShow.results = this.tableTemp.results.slice(start, end);
  }
}
