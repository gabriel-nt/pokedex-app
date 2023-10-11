import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { AboutTabsProps } from '../../types';

export const Root = styled.View`
  flex: 1;
  margin-top: 4px;
`;

export const MarkerWrapper = styled.View`
  height: 4px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.05);
`;

export const Marker = styled(Animated.View)<AboutTabsProps.Styles.ProgressBar>`
  width: 0%;
  height: 4px;
  max-width: 100%;
  border-radius: 10px;
  background-color: ${({ theme, color }) => theme.backgrounds[color]};
`;
