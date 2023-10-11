import styled from 'styled-components/native';
import { TouchableWithoutFeedback } from 'react-native';

export const Modal = styled.Modal``;

export const Root = styled.View`
  flex: 1;
  margin-top: 76px;
`;

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
  padding: 8px 12px;
  padding-right: 24px;
  position: absolute;
  border-radius: 8px;
  background: ${({ theme }) => theme.backgrounds.white};
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.roboto[500]};
`;

export const SortOptionsWrapper = styled.View`
  gap: 12px;
  flex-direction: column;
`;

export const ArrowUp = styled.View`
  top: -6px;
  width: 16px;
  right: 56px;
  height: 16px;
  position: absolute;
  transform: rotate(45deg);
  background: ${({ theme }) => theme.backgrounds.white};
`;

export const SortOptionButton = styled.Pressable`
  width: 100%;
`;
