import { PokemonTypes } from '@/presentation/types';
import { GraphQLClient } from '@/application/protocols';
import { LoadPokemons } from '@/domain/use-cases/pokemons';

import GetPokemonsByGen from './get-pokemons-by-gen.gql';

export class RemoteLoadPokemonsService implements LoadPokemons {
  constructor(
    private readonly graphQLClient: GraphQLClient<LoadPokemons.ApiResponse>
  ) {}

  async load(params: LoadPokemons.Params): Promise<LoadPokemons.Response> {
    const response = await this.graphQLClient.query({
      query: GetPokemonsByGen,
      variables: {
        generation: params.generation
      }
    });

    return parseResponse(response.data);
  }
}

const parseResponse = (
  params: LoadPokemons.ApiResponse
): LoadPokemons.Response => {
  const pokemons = params.pokemons.map(pokemon => {
    const pokemonEvolution = [];
    const { id, name, height, weight, stats, types, abilities } =
      pokemon.data[0];

    const { chain } = pokemon;

    if (chain.evolves_to[1]) {
      pokemonEvolution.push({
        pokemons: [
          {
            name: chain.evolves_to[0]?.name,
            id: chain.evolves_to[0]?.id
          },
          {
            name: chain.evolves_to[1]?.name,
            id: chain.evolves_to[1]?.id
          }
        ],
        minLevel: chain.evolves_to[1].evolution[0]?.min_level,
        trigger: chain.evolves_to[1].evolution[0]?.move?.name
      });

      if (chain.evolves_to.length > 2) {
        pokemonEvolution.push({
          pokemons: [
            {
              name: chain.evolves_to[1].name,
              id: chain.evolves_to[1].id
            },
            {
              name: chain.evolves_to[2].name,
              id: chain.evolves_to[2].id
            }
          ],
          minLevel: chain.evolves_to[2].evolution[0]?.min_level,
          trigger: chain.evolves_to[1].evolution[0]?.move?.name
        });
      }
    }

    return {
      id,
      name,
      weight,
      height,
      stats: stats.map(stat => ({
        name: stat.data.name,
        base_stat: stat.base_stat
      })),
      evolution: pokemonEvolution,
      abilities: abilities.map(ability => ability.data.name),
      types: types.map(type => type.data.name) as PokemonTypes[]
    };
  });

  return pokemons;
};

export namespace LoadPokemonsService {
  export type Params = LoadPokemons.Params;
  export type Response = LoadPokemons.Response;
  export type ApiResponse = LoadPokemons.ApiResponse;
}
