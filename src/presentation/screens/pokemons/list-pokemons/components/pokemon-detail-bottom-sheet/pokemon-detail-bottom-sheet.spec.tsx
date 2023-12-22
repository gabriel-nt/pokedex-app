import { render } from '@/presentation/tests/test-util';
import { PokemonDetailBottomSheet } from './pokemon-detail-bottom-sheet';
import { BottomSheetProvider } from '@/presentation/contexts';

jest.mock('react-native-modalize', () => ({
  useModalize: jest.fn(() => ({
    ref: jest.fn(),
    open: jest.fn(),
    close: jest.fn()
  })),
  Modalize: (props: any) => <>{props.children}</>
}));

describe('Pokemon detail bottom sheet', () => {
  it('should render the component correctly', () => {
    const { getByText } = render(
      <BottomSheetProvider>
        <PokemonDetailBottomSheet
          pokemon={{
            id: 1,
            types: [],
            stats: [],
            height: 20,
            weight: 40,
            abilities: [],
            evolution: [],
            name: 'Pikachu'
          }}
        />
      </BottomSheetProvider>
    );

    expect(getByText('Pikachu')).toBeOnTheScreen();
  });
});
