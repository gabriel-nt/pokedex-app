import { userEvent } from '@testing-library/react-native';

import { SortModal } from './sort-modal';

import { render } from '@/presentation/tests/test-util';

describe('Sort Modal', () => {
  it('should render sort modal correctly', () => {
    const { getByText } = render(
      <SortModal isVisible onClose={() => jest.fn()} />
    );

    expect(getByText('0-9')).toBeOnTheScreen();
    expect(getByText('Organize results for...')).toBeOnTheScreen();
  });

  it('should call onClose and updateSort when a sort option is selected', async () => {
    const onCloseMockFn = jest.fn();

    const { getByText } = render(
      <SortModal isVisible onClose={onCloseMockFn} />
    );

    await userEvent.longPress(getByText('A-Z'));

    expect(onCloseMockFn).toHaveBeenCalledTimes(1);
  });
});
