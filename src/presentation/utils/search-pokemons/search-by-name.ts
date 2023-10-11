import { SearchParams } from './types';

export const searchPokemonsByName = ({ data, name }: SearchParams) => {
  return data.filter(item => item.name.indexOf(name) !== -1);
};
