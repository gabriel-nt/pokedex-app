import {
  StyleProp,
  ViewStyle,
  TargetedEvent,
  TextInputProps,
  NativeSyntheticEvent
} from 'react-native';

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
  testID?: string;
  helperText?: string;
  onMouseEnter?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  onMouseLeave?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  style?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  inputStyle?: TextInputProps['style'];
  leadingContainerStyle?: StyleProp<ViewStyle>;
  trailingContainerStyle?: StyleProp<ViewStyle>;
}
