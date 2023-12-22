import styled from 'styled-components/native';

import { TouchableWithoutFeedback } from 'react-native';

export const Modal = styled.Modal``;

export const Overlay = styled(TouchableWithoutFeedback)`
  flex: 1;
`;

export const OverlayContent = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.backgrounds.blackOpacity};
`;

export const Content = styled.View`
  top: 68px;
  right: 4px;
  width: 76%;
  padding: 12px 16px;
  position: absolute;
  border-radius: 8px;
  background: ${({ theme }) => theme.backgrounds.white};
`;

export const ArrowUp = styled.View`
  top: -6px;
  width: 16px;
  right: 16px;
  height: 16px;
  position: absolute;
  transform: rotate(45deg);
  background: ${({ theme }) => theme.backgrounds.white};
`;

export const RadioButtonGroup = styled.View`
  flex: 1;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 12px;
  flex-direction: row;
`;

export const Label = styled.Text`
  font-size: 14px;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.openSans[700]};
`;
