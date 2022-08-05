import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IListConfig, IPokemonList } from 'src/app/common/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() configList!: IListConfig;
  @Input() dataTable!: IPokemonList;
  public spritesUrl: string = environment.spritesUrl;
  public startCountNum!: number;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['configList']?.currentValue){
      this.setStartCountNumber();
    }
  }

  ngOnInit(): void {
  }

  private setStartCountNumber(){
    this.startCountNum = this.configList.page* this.configList.pageSize;
  }

}
