import { PokemonTypes } from '@/presentation/types';
import { LoadPokemons } from '@/domain/use-cases/pokemons';

export namespace PokemonDetailBottomSheetProps {
  export type Default = {
    pokemon: LoadPokemons.Data;
  };

  export namespace Components {
    export type Header = {
      id: number;
      name: string;
      types: PokemonTypes[];
    };

    export type Content = {
      id: number;
    };

    export type AboutTabs = {
      data: LoadPokemons.Data;
    };
  }

  export namespace Styles {
    export type Container = {
      type: PokemonTypes;
    };
  }
}
