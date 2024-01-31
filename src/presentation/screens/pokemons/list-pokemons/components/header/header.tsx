import { SortModal } from '@/presentation/components';
import logoImg from '@/presentation/assets/images/logo.png';

import * as S from './styles';
import { FilterModal } from '../filter-modal';
import { useHeader } from './hooks';

export const Header = () => {
  const {
    toggleSortModal,
    toggleFilterModal,
    isSortModalVisible,
    isFilterModalVisible
  } = useHeader();

  return (
    <S.Root>
      <S.LogoImage source={logoImg} testID="logo_image" />

      <S.MenuOptionsWrapper>
        <S.MenuOptionBox>
          <S.SortIcon
            testID="sort-button"
            name="sort-alphabetical-ascending"
            onPress={toggleSortModal}
          />
          <SortModal isVisible={isSortModalVisible} onClose={toggleSortModal} />
        </S.MenuOptionBox>

        <S.MenuOptionBox>
          <S.FilterBadge />
          <S.FilterIcon
            name="filter"
            testID="filter-button"
            onPress={toggleFilterModal}
          />
          <FilterModal
            isVisible={isFilterModalVisible}
            onClose={toggleFilterModal}
          />
        </S.MenuOptionBox>
      </S.MenuOptionsWrapper>
    </S.Root>
  );
};
