import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemon } from '../interfaces/pokemon.interface';
import { environment } from 'src/environments/environment';
import { IPokemonList } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http:HttpClient) { }

  public getByName(pokemonName: string):Observable<IPokemon>{
    return this.http.get<IPokemon>(
      `${environment.api}pokemon/${pokemonName}`
    );
  }
  public getList(start: number, limit: number):Observable<IPokemonList>{
    return this.http.get<IPokemonList>(
      `${environment.api}pokemon?offset=${start}&limit=${limit}`
    );
  }
  
}
