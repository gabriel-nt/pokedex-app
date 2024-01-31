import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';

import * as S from './styles';
import pokeballIcon from '@/presentation/assets/images/pokeball-icon.png';

interface AnimatedSortOptionProps {
  label: string;
  isActive?: boolean;
}

export const AnimatedSortOption = ({
  label,
  isActive = false
}: AnimatedSortOptionProps) => {
  const offset = useRef(new Animated.Value(0));
  const opacity = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity.current, {
        duration: 300,
        useNativeDriver: false,
        toValue: isActive ? 1 : 0,
        easing: Easing.out(Easing.ease)
      }),
      Animated.timing(offset.current, {
        duration: 400,
        useNativeDriver: false,
        toValue: isActive ? 8 : 0,
        easing: Easing.out(Easing.ease)
      })
    ]).start();

    if (isActive) {
      offset.current = new Animated.Value(8);
      opacity.current = new Animated.Value(1);
    }
  }, [isActive]);

  return (
    <S.SortOptionContainer>
      {isActive && (
        <Animated.View
          style={{
            opacity: opacity.current
          }}>
          <S.Image source={pokeballIcon} />
        </Animated.View>
      )}

      <S.SortOptionText
        isActive={isActive}
        style={{
          paddingLeft: offset.current
        }}>
        {label}
      </S.SortOptionText>
    </S.SortOptionContainer>
  );
};
