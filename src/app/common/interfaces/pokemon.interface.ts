export interface    IPokemon{
    abilities: Array<IAbilities>;
    height: number;
    id: number;
    base_experience: string;
    is_default: boolean;
    name: string;
    order: number;
    species:ISpecies;
    moves: Array<IMoves>
    stats:Array<IStats>;
    weight: number;
    types: Array<ITypes>;
}

export interface IAbilities{ 
    ability: IAbility;
    slot: number;
    is_hidde:boolean;
}
export interface IAbility{
    name: string;
    url: string;
}

export interface IMoves{ 
    name:string;
}

export interface ISpecies{
    name:string;
    url: string; 
}

export interface IStats{
    base_stat: number;
    stat:IStat;
}
export interface IStat{
    name:string;
}
export interface ITypes{
    type: IType;
}
export interface IType{
    name:string;
}