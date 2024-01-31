import { useEffect, useState } from 'react';

import { UseFilterProps } from './types';

import { usePokemonsStore } from '@/presentation/stores';

export const useFilter = ({ onCloseModal }: UseFilterProps) => {
  const { filters, resetFilters, updateFilters } = usePokemonsStore();

  const [pokemonName, setPokemonName] = useState(filters.name);
  const [generation, setGeneration] = useState(filters.generation);

  useEffect(() => {
    setPokemonName(filters.name);
    setGeneration(filters.generation);
  }, [filters]);

  function handleChangePokemonName(value: string) {
    setPokemonName(value);
  }

  function handleChangeGeneration(value: string) {
    setGeneration(Number(value));
  }

  function handleResetFilters() {
    resetFilters();
    onCloseModal();
  }

  function handleClose() {
    setGeneration(filters.generation);
    setPokemonName(filters.name);
    onCloseModal();
  }

  function handleApplyFilters() {
    updateFilters({
      generation,
      name: pokemonName
    });

    onCloseModal();
  }

  return {
    generation,
    pokemonName,
    handleClose,
    handleResetFilters,
    handleApplyFilters,
    handleChangeGeneration,
    handleChangePokemonName
  };
};
