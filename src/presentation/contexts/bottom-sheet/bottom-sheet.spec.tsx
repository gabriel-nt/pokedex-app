import { Text } from 'react-native';
import { screen, userEvent } from '@testing-library/react-native';
import { TouchableHighlight } from 'react-native';

import { BottomSheetProvider } from './bottom-sheet';

import { useBottomSheet } from '@/presentation/hooks';
import { render } from '@/presentation/tests/test-util';

jest.useFakeTimers();

const TestingComponent = () => {
  const { expand } = useBottomSheet();

  return (
    <TouchableHighlight
      testID="open-bottom-sheet"
      onPress={() => expand(<Text>Pikachu</Text>)}>
      <Text>Press Here</Text>
    </TouchableHighlight>
  );
};

describe('BottomSheet Context', () => {
  it('should render the component correctly', async () => {
    const { getByTestId } = render(
      <BottomSheetProvider>
        <TestingComponent />
      </BottomSheetProvider>
    );

    const buttonElement = getByTestId('open-bottom-sheet');

    await userEvent.press(buttonElement);

    const contentElement = screen.getByText('Pikachu');

    expect(contentElement).toBeOnTheScreen();
  });

  it('should not render the component without the context provider', async () => {
    expect(() => render(<TestingComponent />)).toThrow(
      'useBottomSheet must be used within BottomSheetProvider'
    );
  });
});
