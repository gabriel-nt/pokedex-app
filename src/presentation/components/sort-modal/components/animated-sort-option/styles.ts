import { Animated } from 'react-native';
import styled from 'styled-components/native';

interface SortOptionProps {
  isActive: boolean;
}

export const SortOptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SortOptionText = styled(Animated.Text)<SortOptionProps>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.openSans[500]};
`;

export const Image = styled.Image`
  width: 20px;
  height: 20px;
`;
