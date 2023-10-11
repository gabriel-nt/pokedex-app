import React from 'react';

import * as S from './styles';
import { PokemonCardProps } from '../../types';

import { BADGE_IMAGES } from '@/presentation/utils/constants';

export const Header = ({
  id,
  name,
  types
}: PokemonCardProps.Components.Header) => (
  <S.Root>
    <S.Title>#{String(id).padStart(4, '0')}</S.Title>
    <S.Name>{name}</S.Name>
    <S.BadgeContainer>
      {types.map(type => (
        <S.BadgeImage key={type} source={BADGE_IMAGES[type]} />
      ))}
    </S.BadgeContainer>
  </S.Root>
);
