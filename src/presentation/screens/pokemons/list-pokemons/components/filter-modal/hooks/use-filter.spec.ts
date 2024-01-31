import { act, renderHook } from '@testing-library/react-native';

import { useFilter } from './use-filter';
import { usePokemonsStore } from '@/presentation/stores';

describe('use filter hook', () => {
  it('should return the initial values for the filters', async () => {
    const { result: storeResult } = renderHook(() => usePokemonsStore());

    const {
      current: { updateFilters }
    } = storeResult;

    act(() => {
      updateFilters({
        generation: 2,
        name: 'Pikachu'
      });
    });

    const { result } = renderHook(() => useFilter({ onCloseModal: jest.fn() }));

    const { generation, name } = storeResult.current.filters;

    expect(result.current.pokemonName).toBe(name);
    expect(result.current.generation).toBe(generation);
  });

  it('should be able to change the pokemon name', async () => {
    const { result } = renderHook(() => useFilter({ onCloseModal: jest.fn() }));

    const { handleChangePokemonName } = result.current;

    act(() => handleChangePokemonName('Bulbasaur'));

    expect(result.current.pokemonName).toBe('Bulbasaur');
  });

  it('should be able to change the pokemon generation', async () => {
    const { result } = renderHook(() => useFilter({ onCloseModal: jest.fn() }));

    const { handleChangeGeneration } = result.current;

    act(() => handleChangeGeneration('5'));

    expect(result.current.generation).toBe(5);
  });

  it('should be able to reset the filters', async () => {
    const onCloseModalMockFn = jest.fn();

    const { result } = renderHook(() =>
      useFilter({ onCloseModal: onCloseModalMockFn })
    );

    const { handleResetFilters } = result.current;

    act(() => handleResetFilters());

    expect(result.current.generation).toBe(1);
    expect(result.current.pokemonName).toBe('');
    expect(onCloseModalMockFn).toHaveBeenCalled();
  });

  it('should be able to handle close the modal', async () => {
    const onCloseModalMockFn = jest.fn();

    const {
      result: {
        current: { handleClose }
      }
    } = renderHook(() => useFilter({ onCloseModal: onCloseModalMockFn }));

    act(() => handleClose());

    expect(onCloseModalMockFn).toHaveBeenCalled();
  });

  it('should be able to apply the filters', async () => {
    const onCloseModalMockFn = jest.fn();

    const { result: storeResult } = renderHook(() => usePokemonsStore());

    const { result } = renderHook(() =>
      useFilter({ onCloseModal: onCloseModalMockFn })
    );

    const { handleApplyFilters } = result.current;

    act(() => handleApplyFilters());

    const { generation, name } = storeResult.current.filters;

    expect(onCloseModalMockFn).toHaveBeenCalled();
    expect(result.current.pokemonName).toBe(name);
    expect(result.current.generation).toBe(generation);
  });
});
