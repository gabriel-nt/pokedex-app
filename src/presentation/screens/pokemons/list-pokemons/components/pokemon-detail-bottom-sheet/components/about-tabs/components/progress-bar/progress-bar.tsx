import { Animated, Easing } from 'react-native';

import * as S from './styles';
import { useEffect, useRef } from 'react';
import { AboutTabsProps } from '../../types';

export const ProgressBar = ({
  color,
  value
}: AboutTabsProps.Components.ProgressBar) => {
  const widthRef = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(widthRef.current, {
      toValue: value,
      duration: 800,
      useNativeDriver: false,
      easing: Easing.in(Easing.ease)
    }).start();
  }, []);

  const width = widthRef.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%']
  });

  return (
    <S.Root>
      <S.MarkerWrapper>
        <S.Marker
          style={{
            width
          }}
          color={color}
        />
      </S.MarkerWrapper>
    </S.Root>
  );
};
