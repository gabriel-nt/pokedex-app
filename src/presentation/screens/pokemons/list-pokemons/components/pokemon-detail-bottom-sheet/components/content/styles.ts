import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Root = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Image = styled(FastImage)`
  z-index: 2;
  width: 220px;
  height: 220px;
`;

export const Pokeball = styled.Image`
  z-index: -1;
  width: 180px;
  opacity: 0.3;
  bottom: 28px;
  right: -24px;
  height: 180px;
  position: absolute;
`;
