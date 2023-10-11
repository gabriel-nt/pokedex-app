import { SortParams } from './types';

export const sortPokemonsById = ({ data, order }: SortParams) => {
  if (order === 'desc') {
    return data.sort((a, b) => b.id - a.id);
  }

  return data.sort((a, b) => b.id - a.id).reverse();
};
