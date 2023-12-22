import { useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import { SkeletonProps } from './types';

import * as S from './styles';

export const Skeleton = ({
  width,
  height,
  variant = 'rect'
}: SkeletonProps.Default) => {
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.inOut(Easing.ease)
      })
    ).start();
  }, [animatedValue]);

  const translateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width]
  });

  return (
    <S.Wrapper
      width={width}
      height={height}
      testID="skeleton"
      isRounded={variant.includes('rounded')}>
      <S.LinearGradientAnimated
        colors={['#a0a0a0', '#b0b0b0', '#b0b0b0', '#a0a0a0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          transform: [{ translateX }]
        }}
      />
    </S.Wrapper>
  );
};
