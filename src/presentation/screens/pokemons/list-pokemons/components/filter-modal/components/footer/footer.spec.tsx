import { render } from '@/presentation/tests/test-util';
import { Footer } from './footer';
import { fireEvent } from '@testing-library/react-native';

describe('Footer filter modal', () => {
  it('should be render the component correctly', () => {
    const { getByText } = render(
      <Footer onClose={() => jest.fn()} onSubmit={() => jest.fn()} />
    );

    expect(getByText('Close')).toBeOnTheScreen();
    expect(getByText('Apply')).toBeOnTheScreen();
  });

  it('should be able to close the modal filter', () => {
    const onCloseMockFn = jest.fn();

    const { getByTestId } = render(
      <Footer onClose={onCloseMockFn} onSubmit={() => jest.fn()} />
    );

    fireEvent.press(getByTestId('close-btn'));

    expect(onCloseMockFn).toHaveBeenCalled();
  });

  it('should be able to submit the filters', () => {
    const onSubmitMockFn = jest.fn();

    const { getByTestId } = render(
      <Footer onClose={() => jest.fn()} onSubmit={onSubmitMockFn} />
    );

    const buttonElement = getByTestId('apply-btn');

    fireEvent.press(buttonElement);

    expect(onSubmitMockFn).toHaveBeenCalled();
  });
});
