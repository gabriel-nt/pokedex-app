import styled from 'styled-components/native';

import { PokemonDetailBottomSheetProps } from './types';

export const Root = styled.View<PokemonDetailBottomSheetProps.Styles.Container>`
  flex: 1;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ theme, type }) => theme.backgrounds[type]};
`;
