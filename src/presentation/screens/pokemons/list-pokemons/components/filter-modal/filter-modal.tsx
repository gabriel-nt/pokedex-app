import * as S from './styles';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useFilter } from './hooks';
import { Atoms } from './components';
import { FilterModalProps } from './types';
import { RadioButton, TextField } from '@/presentation/components';

import { defaultTheme } from '@/presentation/styles';
import { GENERATION_OPTIONS } from '@/presentation/utils/constants';

export const FilterModal = ({
  onClose,
  isVisible
}: FilterModalProps.Default) => {
  const {
    generation,
    pokemonName,
    handleClose,
    handleResetFilters,
    handleApplyFilters,
    handleChangeGeneration,
    handleChangePokemonName
  } = useFilter({
    onCloseModal: onClose
  });

  return (
    <S.Modal visible={isVisible} animationType="fade" transparent>
      <S.Overlay onPress={handleClose}>
        <S.OverlayContent />
      </S.Overlay>

      <S.Content>
        <S.ArrowUp />
        <GestureHandlerRootView>
          <Atoms.Header onResetFilters={handleResetFilters} />

          <TextField
            style={{
              marginTop: 14
            }}
            testID="pokemon_name"
            value={pokemonName}
            variant="standard"
            label="Pokemon Name"
            color={defaultTheme.backgrounds.grass}
            onChangeText={value => handleChangePokemonName(value)}
          />

          <S.Label>Select Gen: </S.Label>
          <S.RadioButtonGroup>
            {GENERATION_OPTIONS.map(option => (
              <RadioButton
                id={option.value.toString()}
                key={option.value}
                label={option.label}
                onPress={handleChangeGeneration}
                selected={option.value === generation}
              />
            ))}
          </S.RadioButtonGroup>

          <Atoms.Footer onClose={handleClose} onSubmit={handleApplyFilters} />
        </GestureHandlerRootView>
      </S.Content>
    </S.Modal>
  );
};
