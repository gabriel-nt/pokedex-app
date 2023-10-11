import { PokemonTypes } from '@/presentation/types';

export interface LoadPokemons {
  load: (params: LoadPokemons.Params) => Promise<LoadPokemons.Response>;
}

export namespace LoadPokemons {
  export type Params = {
    generation: number;
  };

  export type ApiResponse = {
    pokemons: {
      data: {
        id: number;
        name: string;
        weight: number;
        height: number;
        types: {
          data: {
            name: string;
          };
        }[];
        abilities: {
          data: {
            name: string;
          };
        }[];
        stats: {
          base_stat: number;
          data: {
            name: string;
          };
        }[];
      }[];
      chain: {
        evolves_to: {
          id: number;
          name: string;
          evolution: {
            min_level: number;
            move: {
              name: string;
            };
          }[];
        }[];
      };
    }[];
  };

  export type Data = {
    id: number;
    name: string;
    weight: number;
    height: number;
    types: PokemonTypes[];
    abilities: string[];
    stats: {
      name: string;
      base_stat: number;
    }[];
    evolution: {
      pokemons: {
        id: number;
        name: string;
      }[];
      minLevel: number;
      trigger: string;
    }[];
  };

  export type Response = Data[];
}
