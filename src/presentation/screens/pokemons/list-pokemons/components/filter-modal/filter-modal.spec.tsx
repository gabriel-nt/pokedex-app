import { fireEvent, act, waitFor } from '@testing-library/react-native';

import { FilterModal } from './filter-modal';
import { render } from '@/presentation/tests/test-util';

describe('Filter modal component', () => {
  it('should render the component correctly', () => {
    const { getByText } = render(
      <FilterModal isVisible onClose={() => jest.fn()} />
    );

    expect(getByText('Pokemon Name')).toBeOnTheScreen();
  });

  it('should be able to search pokemons', async () => {
    const { findByTestId } = render(
      <FilterModal isVisible onClose={() => jest.fn()} />
    );

    await waitFor(async () => {
      const inputElement = await findByTestId('pokemon_name');

      act(() => {
        fireEvent.changeText(inputElement, 'Bulbasaur');
      });

      expect(inputElement.props.value).toEqual('Bulbasaur');
    });
  });
});
