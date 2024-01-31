import { SearchParams } from './types';

export const searchPokemonsByName = ({ data, name }: SearchParams) =>
  data.filter(item => item.name.includes(name.toLocaleLowerCase()));
