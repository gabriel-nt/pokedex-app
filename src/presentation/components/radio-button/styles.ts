import { getSizes } from './utils';
import styled, { css } from 'styled-components/native';

interface RadioButtonProps {
  disabled: boolean;
}

interface InputRadioProps {
  size: number;
  borderSize: number;
  borderColor: string;
}

interface IconRadioProps {
  size: number;
  color: string;
  borderSize: number;
}

export const Label = styled.Text`
  color: ${({ theme }) => theme.backgrounds.dark};
  font-family: ${({ theme }) => theme.fonts.openSans[700]};
`;

export const RadioButtonRoot = styled.Pressable<RadioButtonProps>`
  gap: 8px;
  flex-direction: row;
  align-items: center;
  opacity: ${({ disabled }) => (disabled ? 0.2 : 1)};
`;

export const InputRadio = styled.View<InputRadioProps>`
  align-items: center;
  justify-content: center;
  border-color: ${({ borderColor }) => borderColor};

  ${({ borderSize, size }) => {
    const { borderWidth, sizeFull, sizeHalf } = getSizes(borderSize, size);

    return css`
      width: ${sizeFull}px;
      height: ${sizeFull}px;
      border-radius: ${sizeHalf}px;
      border-width: ${borderWidth}px;
    `;
  }}
`;

export const RadioIcon = styled.View<IconRadioProps>`
  background-color: ${({ color }) => color};

  ${({ borderSize, size }) => {
    const { sizeHalf } = getSizes(borderSize, size);

    return css`
      width: ${sizeHalf}px;
      height: ${sizeHalf}px;
      border-radius: ${sizeHalf}px;
    `;
  }}
`;
