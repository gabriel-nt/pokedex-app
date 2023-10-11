import styled from 'styled-components/native';
import { PokemonCardProps } from './types';
import { PokemonTypes } from '@/presentation/types';
import { defaultTheme } from '@/presentation/styles';

export const Container = styled.Pressable<PokemonCardProps.Styles.Container>`
  margin-top: 36px;
  padding: 16px 24px;
  flex-direction: row;
  border-radius: 12px;
  background-color: ${({ theme, type }) => theme.backgrounds[type]};
`;

export const modalShadow = (type: PokemonTypes) => {
  return {
    shadowColor: defaultTheme.backgrounds[type],
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowOpacity: 1,
    shadowRadius: 9.22,
    elevation: 2
  };
};
