import { render } from '@/presentation/tests/test-util';
import { PokemonCard } from './pokemon-card';
import { fireEvent } from '@testing-library/react-native';

describe('PokemonCard Component', () => {
  it('should render the pokemon card', () => {
    const { getByText } = render(
      <PokemonCard
        onPress={() => {}}
        pokemon={{
          id: 1,
          stats: [],
          weight: 20,
          height: 10,
          evolution: [],
          abilities: [],
          name: 'Pikachu',
          types: ['fire']
        }}
      />
    );

    expect(getByText('Pikachu')).toBeOnTheScreen();
    expect(getByText('#0001')).toBeOnTheScreen();
  });

  it('should be able to on press the card', () => {
    const onPressMockFn = jest.fn();

    const { root } = render(
      <PokemonCard
        onPress={onPressMockFn}
        pokemon={{
          id: 1,
          stats: [],
          weight: 20,
          height: 10,
          evolution: [],
          abilities: [],
          name: 'Pikachu',
          types: ['fire']
        }}
      />
    );

    fireEvent.press(root);

    expect(onPressMockFn).toHaveBeenCalled();
  });
});
