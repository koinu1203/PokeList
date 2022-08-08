import { Component, Input, OnInit } from '@angular/core';
import { IAbilities, IPokemon } from 'src/app/common/interfaces';
import { IPokemonDataSheet } from 'src/app/common/interfaces/pokemon-data-sheet.interface';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  @Input() pokemonData!: IPokemon;
  public dataSheet!: IPokemonDataSheet;
  constructor() { }

  ngOnInit(): void {
    this.initDataSheet();
  }
  private initDataSheet(){
    this.dataSheet = {
      abilities: this.getAbilities(),
      height: this.getHeight(),
      weight: this.getWeight(),
      isInitial: this.pokemonData.is_default? 'Yes':'No',
      types: this.getTypes(),
    } as IPokemonDataSheet;
  }
  private getAbilities(){
    let phrase='';
    if(this.pokemonData.abilities){
      this.pokemonData.abilities.forEach((val)=>{
        phrase += phrase? ', '+val.ability.name: val.ability.name;
      })
    }
    return phrase;
  }
  private getHeight(){
    return (this.pokemonData.height/10).toString() + ' m';
  }
  private getWeight(){
    return (this.pokemonData.weight/10).toString() + ' kg';
  }
  private getTypes(){
    let phrase='';
    if(this.pokemonData.types){
      this.pokemonData.types.forEach((val)=>{
        phrase += phrase? ', '+val.type.name: val.type.name;
      });
    }
    return phrase;
  }
}
