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
  private unsubscribe$: Subject<void>;
  constructor(private pokeApi: PokeApiService) {
    this.unsubscribe$ = new Subject();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.getConfigList();
  }
  public getConfigList() {
    this.pokeApi
      .getListConfig()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.configList = res;
        this.getAllPokemons();
      });
  }
  private getAllPokemons() {
    this.pokeApi
      .getList(0, this.configList.count)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res) => {
        this.tableComplete = res;
        this.tableShow = res;
        this.configTableShow();
      });
  }
  private configTableShow() {
    const start = this.configList.page * this.configList.pageSize;
    const end =
      this.configList.count < start + this.configList.pageSize
        ? this.configList.count
        : start + this.configList.pageSize;
    this.tableShow.results = this.tableComplete.results.splice(start, end);
    console.log(this.tableShow);
  }
}
