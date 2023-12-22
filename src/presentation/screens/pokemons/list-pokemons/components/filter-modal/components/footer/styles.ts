import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Root = styled.View`
  flex: 1;
  gap: 8px;
  margin-top: 16px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const CancelButtonWrapper = styled.View`
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.dark};
`;

export const CancelButton = styled(RectButton)`
  padding: 6px 12px;
`;

export const CancelButtonText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.openSans[500]};
`;

export const SubmitButtonWrapper = styled.View`
  overflow: hidden;
  border-radius: 8px;
  background: ${({ theme }) => theme.backgrounds.purple};
`;

export const SubmitButton = styled(CancelButton)``;

export const SubmitButtonText = styled(CancelButtonText)`
  color: ${({ theme }) => theme.colors.white};
`;
