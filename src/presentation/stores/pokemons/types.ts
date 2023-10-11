import { LoadPokemons } from '@/domain/use-cases/pokemons';
import { SortOption } from '@/presentation/types';

type PokemonState = {
  isLoading: boolean;
  filters: {
    name?: string;
    generation: number;
  };
  sort: SortOption;
  pokemons: LoadPokemons.Response;
};

type PokemonAction = {
  resetFilters: () => void;
  loadPokemons: () => Promise<void>;
  updateSort(params: PokemonState['sort']): void;
  updateFilters: (params: PokemonState['filters']) => void;
  sortPokemons: (data: PokemonState['pokemons']) => PokemonState['pokemons'];
};

export type PokemonsStore = PokemonState & PokemonAction;
