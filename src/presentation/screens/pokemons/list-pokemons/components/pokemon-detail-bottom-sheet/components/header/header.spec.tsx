import { render } from '@/presentation/tests/test-util';

import { Header } from './header';
import { BottomSheetProvider } from '@/presentation/contexts';

describe('Header', () => {
  it('should render the component correctly', () => {
    const { getByText, getByTestId } = render(
      <BottomSheetProvider>
        <Header id={1} name="Charmander" types={['fire']} />
      </BottomSheetProvider>
    );

    expect(getByText(/#0001/)).toBeOnTheScreen();
    expect(getByText(/Charmander/)).toBeOnTheScreen();
    expect(getByTestId('close-bottom-sheet')).toBeOnTheScreen();
  });
});
