import React from 'react';

import * as S from './styles';
import { PokemonCardProps } from '../../types';

export const Thumbnail = ({ id }: PokemonCardProps.Components.Thumbnail) => (
  <S.Root>
    <S.Image
      source={{
        uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
      }}
    />
  </S.Root>
);
