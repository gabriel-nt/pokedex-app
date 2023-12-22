import { render } from '@/presentation/tests/test-util';
import { TextField } from './text-field';
import { Text } from 'react-native';
import { userEvent } from '@testing-library/react-native';

describe('Text field', () => {
  it('should render the component correctly', async () => {
    const onChangeTextMockFn = jest.fn();

    const { getByTestId } = render(
      <TextField
        variant="standard"
        testID="pokemon_name"
        label="Pokemon Name"
        helperText="Helper text"
        onChangeText={onChangeTextMockFn}
      />
    );

    await userEvent.type(getByTestId('pokemon_name'), 'Pikachu');

    expect(onChangeTextMockFn).toHaveBeenCalled();
    expect(getByTestId('pokemon_name')).toBeOnTheScreen();
  });

  it('should be render the leading node correctly', () => {
    const { getByText } = render(
      <TextField
        variant="outlined"
        label="Pokemon Name"
        helperText="Helper text"
        onChangeText={() => jest.fn()}
        leading={<Text>Leading</Text>}
      />
    );

    expect(getByText('Leading')).toBeOnTheScreen();
  });

  it('should be render the trailing node correctly', () => {
    const { getByText } = render(
      <TextField
        variant="filled"
        helperText="Helper text"
        placeholder="Pokemon Name"
        onChangeText={() => jest.fn()}
        trailing={<Text>Trailing</Text>}
      />
    );

    expect(getByText('Trailing')).toBeOnTheScreen();
  });
});
