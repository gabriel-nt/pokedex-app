import { Animated } from 'react-native';
import styled from 'styled-components/native';

import { surfaceScale } from './utils';

interface InputContainerProps {
  focused: boolean;
  hovered: boolean;
  hasAfterContent?: boolean;
  hasPreviousContent?: boolean;
  variant: 'filled' | 'outlined' | 'standard';
}

interface UnderlineProps {
  color?: string;
  hovered?: boolean;
}

interface OutlineProps {
  color?: string;
  hovered?: boolean;
  focused: boolean;
}

export const Wrapper = styled.View``;

export const InputContainer = styled.View<InputContainerProps>`
  flex-direction: row;
  background-color: ${({ variant, focused, hovered }) =>
    variant === 'filled'
      ? focused
        ? surfaceScale(0.14).hex()
        : hovered
        ? surfaceScale(0.08).hex()
        : surfaceScale(0.04).hex()
      : variant === 'outlined'
      ? surfaceScale(0).hex()
      : undefined};
  border-bottom-left-radius: ${({ variant }) =>
    variant === 'filled' ? 0 : 0}px;
  border-bottom-right-radius: ${({ variant }) =>
    variant === 'filled' ? 0 : 0}px;
  border-radius: ${({ variant }) => (variant !== 'standard' ? 4 : 0)}px;
`;

export const Leading = styled.View<Pick<InputContainerProps, 'variant'>>`
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  margin-left: ${({ variant }) => (variant === 'standard' ? 0 : 12)}px;
  margin-top: ${({ variant }) => (variant === 'standard' ? 12 : 16)}px;
  margin-bottom: ${({ variant }) => (variant === 'standard' ? 12 : 16)}px;
`;

export const Trailing = styled.View<InputContainerProps>`
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin: ${({ variant }) => (variant === 'standard' ? 12 : 16)}px 0;
  margin-right: ${({ variant }) => (variant === 'standard' ? 0 : 12)}px;
`;

export const TextInput = styled.TextInput<InputContainerProps>`
  flex: 1;
  top: 8px;
  font-size: 16px;
  padding-top: ${({ variant }) => (variant === 'filled' ? 18 : 0)}px;
  min-height: ${({ variant }) => (variant === 'standard' ? 20 : 56)}px;
  padding-left: ${({ variant, hasPreviousContent }) =>
    hasPreviousContent ? 12 : variant === 'standard' ? 0 : 16}px;
  padding-right: ${({ variant, hasAfterContent }) =>
    hasAfterContent ? 12 : variant === 'standard' ? 0 : 16}px;
  color: ${surfaceScale(0.87).hex()};
`;

export const Underline = styled.View<UnderlineProps>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background-color: ${({ hovered }) =>
    hovered ? surfaceScale(0.87).hex() : surfaceScale(0.42).hex()};
`;

export const UnderlineFocused = styled(Animated.View)<UnderlineProps>`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background-color: ${({ color }) => color};
`;

export const OutlineView = styled.View<OutlineProps>`
  border-radius: 4px;
  border-width: ${({ focused }) => (focused ? 2 : 1)}px;
  border-color: ${({ focused, hovered, color }) =>
    focused
      ? color
      : hovered
      ? surfaceScale(0.87).hex()
      : surfaceScale(0.42).hex()};
`;

export const LabelContainer = styled.View<
  Pick<InputContainerProps, 'variant' | 'hasPreviousContent'>
>`
  justify-content: flex-end;
  position: absolute;
  bottom: 8px;
  left: ${({ variant, hasPreviousContent }) =>
    variant === 'standard'
      ? hasPreviousContent
        ? 36
        : 0
      : hasPreviousContent
      ? 48
      : 16}px;
  height: ${({ variant }) => (variant === 'standard' ? 48 : 56)}px;
`;

export const Label = styled(Animated.Text)`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.openSans[700]};
`;

export const OutlineLabelGap = styled(Animated.View)<OutlineProps>`
  position: absolute;
  top: 0;
  left: -4px;
  right: -4px;
  background-color: ${surfaceScale(0).hex()};
  height: ${({ focused }) => (focused ? 2 : 1)}px;
`;

export const HelperTextWrapper = styled.View`
  margin-top: 4px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const HelperText = styled.View`
  font-size: 12px;
  color: ${surfaceScale(0.6).hex()};
`;
