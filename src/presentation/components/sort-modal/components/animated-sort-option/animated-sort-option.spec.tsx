import { render } from '@/presentation/tests/test-util';
import { AnimatedSortOption } from './animated-sort-option';
import { screen } from '@testing-library/react-native';

describe('Animated sort option', () => {
  it('should render the component correctly', () => {
    const { getByText, rerender } = render(
      <AnimatedSortOption label="Animated Sort" />
    );

    expect(getByText('Animated Sort')).toBeOnTheScreen();

    rerender(<AnimatedSortOption isActive label="Animated Sort 01" />);

    expect(screen.getByText('Animated Sort 01')).toBeOnTheScreen();
  });
});
