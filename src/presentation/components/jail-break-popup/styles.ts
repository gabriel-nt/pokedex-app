import { styled } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Modal = styled.Modal``;

export const OverlayContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.backgrounds.blackOpacity};
`;

export const Content = styled.View`
  width: 85%;
  margin: 20px;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
  padding-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LogoImage = styled.Image`
  width: 110px;
  height: 62px;
`;

export const Title = styled.Text`
  font-size: 18px;
  padding: 12px 0;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.roboto[700]};
`;

export const Description = styled.Text`
  font-size: 16px;
  text-align: center;
  padding-bottom: 32px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.openSans[400]};
`;

export const ButtonWrapper = styled.View`
  overflow: hidden;
  border-radius: 8px;
`;

export const Button = styled(RectButton)`
  padding: 10px 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgrounds.dragon};
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.openSans[600]};
`;

export const BlockIcon = styled(MaterialCommunityIcons)`
  padding: 4px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;
