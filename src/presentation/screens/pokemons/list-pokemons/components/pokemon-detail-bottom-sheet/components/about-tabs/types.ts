import { PokemonTypes } from '@/presentation/types';
import { LoadPokemons } from '@/domain/use-cases/pokemons';

export namespace AboutTabsProps {
  export namespace Components {
    export type Info = {
      pokemon: LoadPokemons.Data;
    };

    export type TabItem = {
      label: string;
      isActive?: boolean;
      onPress: () => void;
      markerColor: PokemonTypes;
    };

    export type BaseStats = {
      stats: {
        name: string;
        base_stat: number;
      }[];
      pokemonType: PokemonTypes;
    };

    export type Evolution = {
      data: LoadPokemons.Data['evolution'];
    };

    export type ProgressBar = {
      value: number;
      color: PokemonTypes;
    };
  }

  export namespace Styles {
    export type TabItemMarker = {
      markerColor: PokemonTypes;
    };

    export type TabItem = {
      isDisabled: boolean;
    };

    export type ProgressBar = {
      color: PokemonTypes;
    };
  }
}
