import { useState } from 'react';

import * as S from './styles';

import logoImg from '@/presentation/assets/images/logo.png';
import { FilterModal, SortModal } from '@/presentation/components';

export const Header = () => {
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setIsFilterModalVisible(prevState => !prevState);
  };

  const toggleSortModal = () => {
    setIsSortModalVisible(prevState => !prevState);
  };

  return (
    <S.Root>
      <S.LogoImage source={logoImg} />

      <S.MenuOptionsWrapper>
        <S.MenuOptionBox>
          <S.SortIcon
            name="sort-alphabetical-ascending"
            onPress={toggleSortModal}
          />
          <SortModal isVisible={isSortModalVisible} onClose={toggleSortModal} />
        </S.MenuOptionBox>

        <S.MenuOptionBox>
          <S.FilterBadge />
          <S.FilterIcon name="filter" onPress={toggleFilterModal} />
          <FilterModal
            isVisible={isFilterModalVisible}
            onClose={toggleFilterModal}
          />
        </S.MenuOptionBox>
      </S.MenuOptionsWrapper>
    </S.Root>
  );
};
