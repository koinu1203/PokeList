import { Router } from '@angular/router';
import { environment } from './../../../environments/environment';
import { IPokemon } from './../../common/interfaces/pokemon.interface';
import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/common/services/poke-api.service';
import {
  IChain,
  IEvolutionChain,
  IPokemonEvolutionChain,
} from 'src/app/common/interfaces';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss'],
})
export class PokemonPageComponent implements OnInit {
  public pokemon!: IPokemon;
  public activeTab = 1;
  public genChainEvol!: Array<IPokemonEvolutionChain>;
  public artWorkUrl: string = environment.artWorkUrl;
  public spriteUrl: string = environment.spritesUrl;
  private chainEvol!: IEvolutionChain;
  constructor(private pokeApi: PokeApiService, private router: Router) {
    this.genChainEvol = new Array();
  }

  ngOnInit(): void {
    this.initResources();
  }
  onShowOtherPokemon(pokemonName: string) {
    this.router.navigate([`/pokemon-page/${pokemonName}`]).then(() => {
      this.initResources();
    });
  }
  private async initResources() {
    try {
      const pokemonName = this.router.url.split('/')[2];

      this.pokemon = await this.pokeApi.getPokemon(pokemonName);
      const response = await this.pokeApi.getChainURL(this.pokemon.id);
      this.chainEvol = await this.pokeApi.getEvolutiveList(
        response.evolution_chain.url
      );
      const firstSpecie = this.chainEvol.chain.species;
      this.genChainEvol.push({
        id: +this.parseUrlToId(firstSpecie.url),
        name: firstSpecie.name,
      });
      this.generateChain(this.chainEvol.chain.evolves_to);
    } catch (e) {
      // console.log(e);
    }
  }

  private generateChain(chain: Array<IChain>) {
    chain.forEach((res: IChain) => {
      this.genChainEvol.push({
        id: +this.parseUrlToId(res.species.url),
        name: res.species.name,
      });
      if (res.evolves_to) {
        this.generateChain(res.evolves_to);
      }
    });
  }
  private parseUrlToId(url: string): string {
    const segmentsUrl = url.split('/');
    return segmentsUrl[segmentsUrl.length - 2];
  }
}
