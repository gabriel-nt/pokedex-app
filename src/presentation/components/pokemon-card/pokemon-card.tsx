import React from 'react';

import * as S from './styles';
import { Card } from './components';
import { PokemonCardProps } from './types';

export const PokemonCard = ({ pokemon, onPress }: PokemonCardProps.Default) => {
  return (
    <S.Container
      onPress={onPress}
      type={pokemon.types[0]}
      style={S.modalShadow(pokemon.types[0])}>
      <Card.Header id={pokemon.id} name={pokemon.name} types={pokemon.types} />
      <Card.Thumbnail id={pokemon.id} />
      <Card.Pokeball />
    </S.Container>
  );
};
