import * as S from './styles';
import { FilterModalProps } from '../../types';

export const Header = ({
  onResetFilters
}: FilterModalProps.Components.Header) => (
  <S.Root>
    <S.Heading>Filter by:</S.Heading>
    <S.ClearFilterButton onPress={onResetFilters}>
      <S.ClearFilterText>Clear filters</S.ClearFilterText>
    </S.ClearFilterButton>
  </S.Root>
);
