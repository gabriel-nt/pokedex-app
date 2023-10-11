import { PokemonTypes } from '@/presentation/types';
import { LoadPokemons } from '@/domain/use-cases/pokemons';

export namespace PokemonCardProps {
  export type Default = {
    onPress: () => void;
    pokemon: LoadPokemons.Data;
  };

  export namespace Components {
    export type Header = {
      id: number;
      name: string;
      types: PokemonTypes[];
    };

    export type Thumbnail = {
      id: number;
    };
  }

  export namespace Styles {
    export type Container = {
      type: PokemonTypes;
    };
  }
}
