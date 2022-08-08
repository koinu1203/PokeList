import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemon } from '../interfaces/pokemon.interface';
import { environment } from 'src/environments/environment';
import {
  IEvolutionChain,
  IListConfig,
  IPokemonList,
  IPokemonSpecies,
} from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {

  constructor(private http: HttpClient) {}
  
  public getPokemon(pokemonName: string): Promise<IPokemon> {
    return new Promise((resolve,reject) => {
      this.http.get<IPokemon>(`${environment.api}pokemon/${pokemonName}`)
        .subscribe((res) => {
          resolve(res);
        });
      
    });
  }
  public getList(start: number, limit: number): Promise<IPokemonList> {
    return new Promise((resolve) => {
      this.http.get<IPokemonList>(`${environment.api}pokemon?offset=${start}&limit=${limit}`)
        .subscribe((res) => {
          resolve(res);
        });
    });
  }
  public getListConfig(): Promise<IListConfig> {
    return new Promise((resolve) => {
      this.http.get<IListConfig>('../../../assets/config/list.config.json')
        .subscribe((res) => {
          resolve(res);
        });
    });
  }

  public getChainURL(pokemonId: number): Promise<IPokemonSpecies> {
    return new Promise((resolve) => {
      this.http
        .get<IPokemonSpecies>(`${environment.api}pokemon-species/${pokemonId}/`)
        .subscribe((res) => {
          resolve(res);
        });
    });
  }
  public getEvolutiveList(chainURL: string): Promise<IEvolutionChain> {
    return new Promise((resolve) => {
      this.http.get<IEvolutionChain>(chainURL).subscribe((res) => {
        resolve(res);
      });
    });
  }
}
