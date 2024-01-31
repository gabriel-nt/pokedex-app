import { fireEvent } from '@testing-library/react-native';

import { Header } from './header';
import { render } from '@/presentation/tests/test-util';

describe('Header filter modal', () => {
  it('should be render the component correctly', () => {
    const { getByText } = render(<Header onResetFilters={() => jest.fn()} />);

    expect(getByText(/Filter by/)).toBeOnTheScreen();
  });

  it('should be able to reset the filters', () => {
    const onResetFiltersMockFn = jest.fn();

    const { getByTestId } = render(
      <Header onResetFilters={onResetFiltersMockFn} />
    );

    fireEvent.press(getByTestId('clear-btn'));

    expect(onResetFiltersMockFn).toHaveBeenCalled();
  });
});
