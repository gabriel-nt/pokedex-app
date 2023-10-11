import { useEffect } from 'react';

import { usePokemonsStore } from '@/presentation/stores';

export const useListPokemons = () => {
  const { pokemons, isLoading, loadPokemons } = usePokemonsStore();

  useEffect(() => {
    loadPokemons();
  }, []);

  return {
    pokemons,
    isLoading
  };
};
