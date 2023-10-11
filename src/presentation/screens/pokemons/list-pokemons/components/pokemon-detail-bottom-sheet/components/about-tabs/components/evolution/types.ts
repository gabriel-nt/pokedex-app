import { LoadPokemons } from '@/domain/use-cases/pokemons';

export namespace EvolutionProps {
  export type Default = {
    data: LoadPokemons.Data['evolution'];
  };

  export namespace Components {
    export type Pokemon = {
      id: number;
      name: string;
    };

    export type TriggerLevel = {
      level: string | number;
      trigger: string;
    };
  }
}
