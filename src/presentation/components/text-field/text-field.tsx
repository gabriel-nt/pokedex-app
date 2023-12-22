import { StyleSheet } from 'react-native';

import * as S from './styles';
import { surfaceScale } from './utils';
import { useTextField } from './hooks';
import { TextFieldProps } from './types';

export const TextField = ({
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
  testID,
  ...rest
}: TextFieldProps) => {
  const {
    focused,
    hovered,
    handleBlur,
    handleFocus,
    leadingNode,
    trailingNode,
    focusAnimation,
    activeAnimation,
    handleMouseEnter,
    handleMouseLeave
  } = useTextField({
    onBlur,
    leading,
    onFocus,
    trailing,
    onMouseLeave,
    onMouseEnter,
    value: rest.value
  });

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
          testID={testID}
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
                    outputRange: [surfaceScale(0.87).hex(), '#000']
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
};
