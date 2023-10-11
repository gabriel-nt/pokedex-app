import { makeApolloGraphQLClient } from '../../graphql';

import { LoadPokemons } from '@/domain/use-cases/pokemons';
import { RemoteLoadPokemonsService } from '@/application/use-cases/pokemons/remote-load-pokemons';

export const makeRemoteLoadPokemons = (): LoadPokemons => {
  return new RemoteLoadPokemonsService(makeApolloGraphQLClient());
};
