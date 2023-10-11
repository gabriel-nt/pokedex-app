import * as S from './styles';

import { usePokemonsStore } from '@/presentation/stores';
import { SORT_OPTIONS } from '@/presentation/utils/constants';
import { AnimatedSortOption } from './animated-sort-option/animated-sort-option';
import { SortOption } from '@/presentation/types';

interface SortModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const SortModal = ({ isVisible, onClose }: SortModalProps) => {
  const { sort, updateSort } = usePokemonsStore();

  function handleSortPokemons(option: SortOption) {
    onClose();
    updateSort(option);
  }

  return (
    <S.Modal visible={isVisible} animationType="fade" transparent>
      <S.Overlay onPress={onClose}>
        <S.OverlayContent />
      </S.Overlay>

      <S.Content>
        <S.ArrowUp />

        <S.Title>Organize results for...</S.Title>

        <S.SortOptionsWrapper>
          {SORT_OPTIONS.map(option => {
            return (
              <S.SortOptionButton
                key={option.label}
                onPress={() => handleSortPokemons(option)}>
                <AnimatedSortOption
                  label={option.label}
                  isActive={sort.label === option.label}
                />
              </S.SortOptionButton>
            );
          })}
        </S.SortOptionsWrapper>
      </S.Content>
    </S.Modal>
  );
};
