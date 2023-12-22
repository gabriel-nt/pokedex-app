import { render } from '@/presentation/tests/test-util';
import { Header } from './header';

describe('header component', () => {
  it('should render the component correctly', () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('logo_image')).toBeOnTheScreen();
  });
});
