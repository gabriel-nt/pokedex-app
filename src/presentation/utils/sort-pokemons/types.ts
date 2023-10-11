import { LoadPokemons } from '@/domain/use-cases/pokemons';

export type SortParams = {
  order: 'desc' | 'asc';
  data: LoadPokemons.Response;
};
