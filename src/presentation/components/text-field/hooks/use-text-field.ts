import {
  Easing,
  Animated,
  TargetedEvent,
  NativeSyntheticEvent,
  TextInputFocusEventData
} from 'react-native';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { surfaceScale } from '../utils';
import { UseTextFieldProps } from './types';

export const useTextField = ({
  value,
  onBlur,
  leading,
  trailing,
  onFocus,
  onMouseEnter,
  onMouseLeave
}: UseTextFieldProps) => {
  const leadingNode =
    typeof leading === 'function'
      ? leading({ color: surfaceScale(0.62).hex(), size: 24 })
      : leading;

  const trailingNode =
    typeof trailing === 'function'
      ? trailing({
          color: surfaceScale(0.62).hex(),
          size: 24
        })
      : trailing;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(
    (event: NativeSyntheticEvent<TargetedEvent>) => {
      onMouseEnter?.(event);
      setHovered(true);
    },
    [onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (event: NativeSyntheticEvent<TargetedEvent>) => {
      onMouseLeave?.(event);
      setHovered(false);
    },
    [onMouseLeave]
  );

  const [focused, setFocused] = useState(false);

  const handleFocus = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onFocus?.(event);
      setFocused(true);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (event: NativeSyntheticEvent<TextInputFocusEventData>) => {
      onBlur?.(event);
      setFocused(false);
    },
    [onBlur]
  );

  const focusAnimation = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    Animated.timing(focusAnimation, {
      toValue: focused ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false
    }).start();
  }, [focused, focusAnimation]);

  const active = useMemo(
    () => focused || (value?.length || 0) > 0,
    [focused, value]
  );

  const activeAnimation = useMemo(() => new Animated.Value(active ? 1 : 0), []);

  useEffect(() => {
    Animated.timing(activeAnimation, {
      toValue: active ? 1 : 0,
      duration: 200,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false
    }).start();
  }, [active, activeAnimation]);

  return {
    hovered,
    focused,
    handleBlur,
    leadingNode,
    handleFocus,
    trailingNode,
    focusAnimation,
    activeAnimation,
    handleMouseEnter,
    handleMouseLeave
  };
};
