import { Router } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IListConfig, IPokemonList } from 'src/app/common/interfaces';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() configList!: IListConfig;
  @Input() dataTable!: IPokemonList;
  @Input() isLoading: boolean =false;
  @Output() changePage:EventEmitter<number>;
  @Output() changePagination:EventEmitter<number>;
  public spritesUrl: string = environment.spritesUrl;
  public form!:FormGroup;
  public startCountNum!: number;
  constructor(private router:Router ) { 
    this.changePage=new EventEmitter();
    this.changePagination=new EventEmitter();
  }
  
  ngOnInit(): void {
    this.initForm();
  }

  public getStartNumber(){
    return (this.configList.page-1)* this.configList.pageSize;
  }
  public onDetailsPokemon(pokemonName:string){
    this.router.navigate([`/pokemon-page/${pokemonName}`]);
  }
  onChangePage(page:number){
    this.changePage.emit(page);
  }
  onSelectPagination(){
    if(this.form.value.pagination>0){
      let newPagination;
      switch(this.form.value.pagination){
        case '2': newPagination=20;break;
        case '3': newPagination=50;break;
        default: newPagination=10; break;
      }

      this.changePagination.emit(newPagination);
      // this.changePagination.emit(this.form.value.pagination);
    }
    
  }
  private initForm(){
    this.form=new FormGroup({
      pagination: new FormControl(0),
    });
  }
}
