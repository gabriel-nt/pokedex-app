import { sortPokemonsById } from './sort-by-id';
import { SortParams } from './types';

const pokemons = [
  {
    id: 1
  },
  {
    id: 10
  }
] as SortParams['data'];

describe('Sort by id', () => {
  it('should be able to sort the pokemons ids ascrescent', () => {
    const result = sortPokemonsById({
      data: pokemons,
      order: 'asc'
    });

    expect(result[0].id).toEqual(1);
  });

  it('should be able to sort the pokemons ids decrescent', () => {
    const result = sortPokemonsById({
      data: pokemons,
      order: 'desc'
    });

    expect(result[0].id).toEqual(10);
  });
});
