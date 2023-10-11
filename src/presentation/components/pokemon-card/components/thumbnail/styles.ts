import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Root = styled.View`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 2%;
  top: -32px;
`;

export const Image = styled(FastImage)`
  width: 160px;
  height: 160px;
`;
