import { create } from 'zustand';

import { PokemonsStore } from './types';

import {
  sortPokemonsById,
  sortPokemonsByName
} from '@/presentation/utils/sort-pokemons';
import { SORT_OPTIONS } from '@/presentation/utils/constants';
import { makeAsyncStorageAdapter } from '@/main/factories/cache';
import { makeRemoteLoadPokemons } from '@/main/factories/use-cases';
import { searchPokemonsByName } from '@/presentation/utils/search-pokemons';

export const usePokemonsStore = create<PokemonsStore>((set, get) => ({
  pokemons: [],
  isLoading: true,
  filters: {
    name: '',
    generation: 1
  },
  sort: SORT_OPTIONS[0],
  sortPokemons(data) {
    const { field, direction } = get().sort;

    if (field === 'id') {
      return sortPokemonsById({
        data,
        order: direction
      });
    }

    return sortPokemonsByName({
      data,
      order: direction
    });
  },
  updateSort({ field, direction, label }) {
    set(() => ({
      sort: {
        field,
        label,
        direction
      }
    }));

    get().loadPokemons();
  },
  loadPokemons: async () => {
    set(() => ({
      isLoading: true
    }));

    const { generation, name } = get().filters;

    const asyncStorage = makeAsyncStorageAdapter();

    const storageData = await asyncStorage.get<PokemonsStore['pokemons']>(
      `pokemons-storage-${generation}`
    );

    if (storageData) {
      const filteredPokemons = name
        ? searchPokemonsByName({
            name,
            data: storageData
          })
        : storageData;

      setTimeout(() => {
        set(state => ({
          ...state,
          isLoading: false,
          pokemons: get().sortPokemons(filteredPokemons)
        }));
      }, 1500);
    } else {
      const data = await makeRemoteLoadPokemons().load({
        generation
      });

      const filteredPokemons = name
        ? searchPokemonsByName({
            name,
            data
          })
        : data;

      set(state => ({
        ...state,
        isLoading: false,
        pokemons: get().sortPokemons(filteredPokemons)
      }));

      asyncStorage.set(`pokemons-storage-${generation}`, data);
    }
  },
  updateFilters({ name, generation }) {
    set(() => ({
      filters: {
        name,
        generation
      }
    }));

    get().loadPokemons();
  },
  resetFilters() {
    set(() => ({
      filters: {
        name: '',
        generation: 1
      }
    }));

    get().loadPokemons();
  }
}));
