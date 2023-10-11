import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type RadioButtonProps = {
  borderColor?: string;
  borderSize?: number;
  containerStyle?: StyleProp<ViewStyle>;
  description?: string;
  descriptionStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  id: string;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  onPress?: (id: string) => void;
  selected?: boolean;
  size?: number;
  testID?: string;
  value?: string;
};

export type RadioGroupProps = {
  containerStyle?: StyleProp<ViewStyle>;
  layout?: 'row' | 'column';
  onPress?: (selectedId: string) => void;
  radioButtons: RadioButtonProps[];
  selectedId?: string;
  testID?: string;
};
