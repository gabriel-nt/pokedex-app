import { Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styled } from 'styled-components/native';
import { SkeletonProps } from './types';

export const Wrapper = styled.View<SkeletonProps.Styles.Container>`
  overflow: hidden;
  border-color: #b0b0b0;
  background-color: #a0a0a0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ isRounded }) => (isRounded ? 99 : 8)}px;
`;

export const LinearGradientAnimated = styled(
  Animated.createAnimatedComponent(LinearGradient)
)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`;
