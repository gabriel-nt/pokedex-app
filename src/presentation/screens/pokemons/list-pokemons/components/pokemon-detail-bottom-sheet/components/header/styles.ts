import { styled } from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Root = styled.View`
  gap: 12px;
  padding: 20px;
  flex-direction: column;
`;

export const HeadingWrapper = styled.View`
  position: relative;
  flex-direction: row;
  justify-content: center;
`;

export const GoBackIcon = styled(MaterialCommunityIcons)`
  top: 0;
  left: 0;
  font-size: 26px;
  position: absolute;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 20px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.openSans[700]};
`;

export const Subtitle = styled.Text`
  top: 0;
  right: 0;
  font-size: 24px;
  position: absolute;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.colors.light04};
  font-family: ${({ theme }) => theme.fonts.roboto[500]};
`;

export const BadgeContainer = styled.View`
  gap: 8px;
  flex-direction: row;
  justify-content: center;
`;

export const BadgeImage = styled.Image``;
