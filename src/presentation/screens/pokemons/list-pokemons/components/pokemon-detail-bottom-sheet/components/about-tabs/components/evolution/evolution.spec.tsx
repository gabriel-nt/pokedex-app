import { render } from '@/presentation/tests/test-util';
import { Evolution } from './evolution';

describe('Evolution', () => {
  it('should render the component correctly', () => {
    const { getByText } = render(
      <Evolution
        data={[
          {
            minLevel: 10,
            pokemons: [
              {
                id: 1,
                name: 'Bulbasaur'
              }
            ],
            trigger: 'level-up'
          }
        ]}
      />
    );

    expect(getByText('Bulbasaur')).toBeOnTheScreen();
  });

  it('should render the empty text if there is no evolution', () => {
    const { getByText } = render(<Evolution data={[]} />);

    expect(
      getByText("This pokemon doesn't have an evolution")
    ).toBeOnTheScreen();
  });
});
