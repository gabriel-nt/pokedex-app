import * as S from './styles';
import { PokemonDetailBottomSheetProps } from '../../types';

import pokeballImg from '@/presentation/assets/images/pokeball.png';

export const Content = ({
  id
}: PokemonDetailBottomSheetProps.Components.Content) => (
  <S.Root>
    <S.Image
      source={{
        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      }}
    />
    <S.Pokeball source={pokeballImg} />
  </S.Root>
);
