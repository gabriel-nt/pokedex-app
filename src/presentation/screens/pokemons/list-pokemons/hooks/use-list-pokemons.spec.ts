import { renderHook, waitFor } from '@testing-library/react-native';
import { useListPokemons } from './use-list-pokemons';

describe('Use list pokemons hook', () => {
  it('should return the pokemons list', async () => {
    const { result } = renderHook(() => useListPokemons());

    await waitFor(() => {
      expect(result.current.isLoading).toBeFalsy();
      expect(result.current.pokemons.length).toBeGreaterThan(2);
    });
  });
});
