import { useState } from 'react';

export const useHeader = () => {
  const [isSortModalVisible, setIsSortModalVisible] = useState(false);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  const toggleFilterModal = () => {
    setIsFilterModalVisible(prevState => !prevState);
  };

  const toggleSortModal = () => {
    setIsSortModalVisible(prevState => !prevState);
  };

  return {
    toggleSortModal,
    toggleFilterModal,
    isSortModalVisible,
    isFilterModalVisible
  };
};
