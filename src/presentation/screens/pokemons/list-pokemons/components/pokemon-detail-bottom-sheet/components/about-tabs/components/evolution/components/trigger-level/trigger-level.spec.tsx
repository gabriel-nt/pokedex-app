import { render } from '@/presentation/tests/test-util';
import { TriggerLevel } from './trigger-level';

describe('Trigger Level', () => {
  it('should render the level text correctly', () => {
    const { getByText } = render(
      <TriggerLevel level={10} trigger="level-up" />
    );

    expect(getByText('Lvl 10')).toBeOnTheScreen();
  });

  it('should render the trigger text correctly', () => {
    const { getByText, rerender } = render(
      <TriggerLevel level="" trigger="level-up" />
    );

    expect(getByText('Use level-up')).toBeOnTheScreen();

    rerender(<TriggerLevel level="" trigger="" />);

    expect(getByText('Undefined Trigger')).toBeOnTheScreen();
  });
});
