import { render } from '@/presentation/tests/test-util';
import { Skeleton } from './skeleton';
import { screen } from '@testing-library/react-native';

describe('Skeleton', () => {
  it('should render the component correctly', () => {
    const { getByTestId, rerender } = render(<Skeleton height={8} width={8} />);

    expect(getByTestId('skeleton')).toBeOnTheScreen();

    rerender(<Skeleton height={8} width={8} variant="rounded" />);

    expect(screen.getByTestId('skeleton')).toBeOnTheScreen();
  });
});
