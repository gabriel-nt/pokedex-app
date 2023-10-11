import { RadioButtonProps } from './types';

import * as S from './styles';
import { defaultTheme } from '@/presentation/styles';
import { useTheme } from 'styled-components/native';

export const RadioButton = ({
  id,
  label,
  testID,
  onPress,
  size = 24,
  labelStyle,
  borderColor = defaultTheme.colors.dark,
  containerStyle,
  borderSize = 2,
  disabled = false,
  selected = false
}: RadioButtonProps) => {
  const theme = useTheme();

  function handlePress() {
    if (disabled) {
      return null;
    }
    if (onPress) {
      onPress(id);
    }
  }

  return (
    <S.RadioButtonRoot
      disabled={disabled}
      onPress={handlePress}
      style={containerStyle}
      testID={testID}>
      <S.InputRadio
        size={size}
        borderSize={borderSize}
        borderColor={selected ? theme.backgrounds.purple : borderColor}>
        {selected && (
          <S.RadioIcon
            size={size}
            borderSize={borderSize}
            color={selected ? theme.backgrounds.purple : borderColor}
          />
        )}
      </S.InputRadio>
      {Boolean(label) && <S.Label style={[labelStyle]}>{label}</S.Label>}
    </S.RadioButtonRoot>
  );
};
