import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Animated,
  Easing,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TargetedEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  ViewStyle
} from 'react-native';

import * as S from './styles';
import { surfaceScale } from './utils';

export interface TextFieldProps extends TextInputProps {
  variant?: 'filled' | 'outlined' | 'standard';
  label?: string;
  leading?:
    | React.ReactNode
    | ((props: { color: string; size: number }) => React.ReactNode | null)
    | null;
  trailing?:
    | React.ReactNode
    | ((props: { color: string; size: number }) => React.ReactNode | null)
    | null;
  color?: string;
  helperText?: string;
  onMouseEnter?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  onMouseLeave?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  style?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: TextInputProps['style'];
  leadingContainerStyle?: StyleProp<ViewStyle>;
  trailingContainerStyle?: StyleProp<ViewStyle>;
}

export const TextField: React.FC<TextFieldProps> = React.forwardRef(
  (
    {
      variant = 'filled',
      label,
      leading,
      trailing,
      color = 'primary',
      helperText,
      onMouseEnter,
      onMouseLeave,
      style,
      inputContainerStyle,
      inputStyle,
      leadingContainerStyle,
      trailingContainerStyle,
      placeholder,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
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
      () => focused || (rest.value?.length || 0) > 0,
      [focused, rest.value]
    );

    const activeAnimation = useMemo(
      () => new Animated.Value(active ? 1 : 0),
      []
    );

    useEffect(() => {
      Animated.timing(activeAnimation, {
        toValue: active ? 1 : 0,
        duration: 200,
        easing: Easing.out(Easing.ease),
        useNativeDriver: false
      }).start();
    }, [active, activeAnimation]);

    return (
      <S.Wrapper style={[style]}>
        <S.InputContainer
          focused={focused}
          hovered={hovered}
          variant={variant}
          style={[inputContainerStyle]}>
          {leadingNode && (
            <S.Leading variant={variant} style={[leadingContainerStyle]}>
              {leadingNode}
            </S.Leading>
          )}

          <S.TextInput
            ref={ref}
            variant={variant}
            hasPreviousContent={!!leadingNode}
            hasAfterContent={!!trailingNode}
            style={[inputStyle]}
            placeholder={
              label ? (focused ? placeholder : undefined) : placeholder
            }
            selectionColor={color}
            placeholderTextColor={surfaceScale(0.4).hex()}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...({
              onMouseEnter: handleMouseEnter,
              onMouseLeave: handleMouseLeave,
              ...rest
            } as any)}
          />

          {trailingNode && (
            <S.Trailing
              focused={focused}
              hovered={hovered}
              variant={variant}
              style={[trailingContainerStyle]}>
              {trailingNode}
            </S.Trailing>
          )}

          {(variant === 'filled' || variant === 'standard') && (
            <>
              <S.Underline hovered={hovered} pointerEvents="none" />
              <S.UnderlineFocused
                color={color}
                style={[{ transform: [{ scaleX: focusAnimation }] }]}
                pointerEvents="none"
              />
            </>
          )}

          {variant === 'outlined' && (
            <S.OutlineView
              color={color}
              focused={focused}
              style={[StyleSheet.absoluteFill]}
              pointerEvents="none"
            />
          )}

          {label && (
            <S.LabelContainer
              pointerEvents="none"
              variant={variant}
              hasPreviousContent={!!leadingNode}>
              {variant === 'outlined' && (
                <S.OutlineLabelGap
                  focused={focused}
                  style={[{ transform: [{ scaleX: activeAnimation }] }]}
                />
              )}
              <S.Label
                style={[
                  {
                    color: focusAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [surfaceScale(0.87).hex(), color]
                    }),
                    fontSize: activeAnimation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [14, 12]
                    }),
                    transform: [
                      {
                        translateY: activeAnimation.interpolate({
                          inputRange: [0, 1],
                          outputRange: [
                            0,
                            variant === 'filled'
                              ? -12
                              : variant === 'outlined'
                              ? -28
                              : -20
                          ]
                        })
                      }
                    ]
                  }
                ]}>
                {label}
              </S.Label>
            </S.LabelContainer>
          )}
        </S.InputContainer>
        <S.HelperTextWrapper>
          {helperText && <S.HelperText {...rest} />}
        </S.HelperTextWrapper>
      </S.Wrapper>
    );
  }
);

export default TextInput;
