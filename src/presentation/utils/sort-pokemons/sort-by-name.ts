import { SortParams } from './types';

export const sortPokemonsByName = ({ data, order }: SortParams) => {
  if (order === 'asc') {
    return data.sort((a, b) => a.name.localeCompare(b.name));
  }

  return data.sort((a, b) => a.name.localeCompare(b.name)).reverse();
};
