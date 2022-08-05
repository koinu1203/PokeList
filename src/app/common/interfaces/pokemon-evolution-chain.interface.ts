import { ISpecies } from './pokemon.interface';
export interface IPokemonEvolutionChain{
    id:number;
    name: string;
    
}
export interface IEvolutionChain{
    id: number;
    chain: IChain;
}
export interface IChain{
    is_baby: boolean;
    evolves_to: Array<IChain>;
    species: ISpecies;
    
}