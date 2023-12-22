import { fireEvent } from '@testing-library/react-native';

import { render } from '@/presentation/tests/test-util';
import { RadioButton } from './radio-button';

describe('RadioButton Component', () => {
  it('should render the radio button', () => {
    const { getByText } = render(
      <RadioButton
        id="1"
        selected
        disabled
        label="IIV"
        value="IIV"
        testID="radio-button"
      />
    );

    expect(getByText('IIV')).toBeVisible();
  });

  it('should be able to on press the radio button', () => {
    const onPressMockFn = jest.fn();

    const { getByText, getByTestId } = render(
      <RadioButton
        id="1"
        value="IIV"
        label="IIV"
        testID="radio-button"
        onPress={onPressMockFn}
      />
    );

    fireEvent.press(getByTestId('radio-button'));

    expect(getByText('IIV')).toBeVisible();
    expect(onPressMockFn).toHaveBeenCalledTimes(1);
  });
});
