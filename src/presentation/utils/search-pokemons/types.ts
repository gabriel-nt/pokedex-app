import { LoadPokemons } from '@/domain/use-cases/pokemons';

export type SearchParams = {
  name: string;
  data: LoadPokemons.Response;
};
