import FastImage from 'react-native-fast-image';
import { styled } from 'styled-components/native';

export const Root = styled.View`
  gap: 8px;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.Text`
  font-size: 16px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.openSans[700]};
`;

export const ImageWrapper = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const Image = styled(FastImage)`
  z-index: 2;
  width: 80px;
  height: 80px;
`;
