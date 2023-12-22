import { render } from '@/presentation/tests/test-util';
import { AboutTabs } from './about-tabs';
import { userEvent } from '@testing-library/react-native';

jest.useFakeTimers();

describe('About tabs', () => {
  it('should render the info content correctly', () => {
    const { getByText } = render(
      <AboutTabs
        data={{
          id: 3,
          types: [],
          stats: [],
          weight: 20,
          height: 100,
          evolution: [],
          name: 'Venusaur',
          abilities: ['Overgrow', 'Chlorophyll']
        }}
      />
    );

    expect(getByText(/Overgrow/)).toBeOnTheScreen();
    expect(getByText(/Chlorophyll/)).toBeOnTheScreen();
  });

  it('should render the base stats content correctly', async () => {
    const { getByText } = render(
      <AboutTabs
        data={{
          id: 3,
          types: [],
          stats: [
            {
              base_stat: 80,
              name: 'HP'
            }
          ],
          weight: 20,
          height: 100,
          evolution: [],
          name: 'Venusaur',
          abilities: ['Overgrow', 'Chlorophyll']
        }}
      />
    );

    await userEvent.press(getByText('Base Stats'));

    expect(getByText('HP')).toBeOnTheScreen();
  });

  it('should render the evolution content correctly', async () => {
    const { getByText } = render(
      <AboutTabs
        data={{
          id: 3,
          types: [],
          stats: [],
          weight: 20,
          height: 100,
          evolution: [],
          name: 'Venusaur',
          abilities: ['Overgrow', 'Chlorophyll']
        }}
      />
    );

    await userEvent.press(getByText('Evolution'));

    expect(
      getByText(/This pokemon doesn't have an evolution/)
    ).toBeOnTheScreen();
  });
});
