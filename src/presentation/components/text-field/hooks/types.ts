import { TextFieldProps } from '../types';

export type UseTextFieldProps = Pick<
  TextFieldProps,
  | 'value'
  | 'onBlur'
  | 'leading'
  | 'trailing'
  | 'onFocus'
  | 'onMouseEnter'
  | 'onMouseLeave'
>;
