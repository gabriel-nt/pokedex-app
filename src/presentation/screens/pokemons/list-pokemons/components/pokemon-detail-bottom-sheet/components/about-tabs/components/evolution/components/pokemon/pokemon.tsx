import * as S from './styles';
import { EvolutionProps } from '../../types';

export const Pokemon = ({ id, name }: EvolutionProps.Components.Pokemon) => (
  <S.Root>
    <S.ImageWrapper>
      <S.Image
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
        }}
      />
    </S.ImageWrapper>
    <S.Name>{name}</S.Name>
  </S.Root>
);
