import { styled } from 'styled-components/native';

import { LoadPokemons } from '@/domain/use-cases/pokemons';
import { FlashList, FlashListProps } from '@shopify/flash-list';

export const Root = styled.ImageBackground`
  flex: 1;
  padding-top: 8px;
`;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    gap: 36,
    margin: 16,
    paddingTop: 16,
    paddingBottom: 36,
    flexDirection: 'column'
  }
})``;

export const Content = styled(
  FlashList as new (
    props: FlashListProps<LoadPokemons.Data>
  ) => FlashList<LoadPokemons.Data>
).attrs({
  contentContainerStyle: {
    paddingBottom: 24,
    paddingHorizontal: 16
  }
})``;
