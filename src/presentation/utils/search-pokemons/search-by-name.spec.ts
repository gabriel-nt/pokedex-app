import { searchPokemonsByName } from './search-by-name';
import { SearchParams } from './types';

const pokemons = [
  {
    name: 'Pikachu'
  },
  {
    name: 'Raichu'
  }
] as SearchParams['data'];

describe('Search by name', () => {
  it('should be able to search a item by name', () => {
    const result = searchPokemonsByName({
      data: pokemons,
      name: 'Raichu'
    });

    expect(result).toHaveLength(1);
  });

  it('should return a empty array if nothing was found', () => {
    const result = searchPokemonsByName({
      data: pokemons,
      name: 'Fearow'
    });

    expect(result).toHaveLength(0);
  });
});
