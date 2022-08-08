export interface IPokemonList{
    count: number;
    results: Array<IResults>;
}

export interface IResults{
    name: string;
    id: number;
}
