import { sortPokemonsByName } from './sort-by-name';
import { SortParams } from './types';

const pokemons = [
  {
    name: 'Ekans'
  },
  {
    name: 'Raichu'
  }
] as SortParams['data'];

describe('Sort by name', () => {
  it('should be able to sort the pokemons names ascrescent', () => {
    const result = sortPokemonsByName({
      data: pokemons,
      order: 'asc'
    });

    expect(result[0].name).toEqual('Ekans');
  });

  it('should be able to sort the pokemons names decrescent', () => {
    const result = sortPokemonsByName({
      data: pokemons,
      order: 'desc'
    });

    expect(result[0].name).toEqual('Raichu');
  });
});
