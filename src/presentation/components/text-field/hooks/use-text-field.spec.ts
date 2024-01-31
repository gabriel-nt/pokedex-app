import { act, renderHook } from '@testing-library/react-native';
import { useTextField } from './use-text-field';

describe('Use text field hook', () => {
  it('should be able to focus the input', () => {
    const onFocusMockFn = jest.fn();

    const { result } = renderHook(() =>
      useTextField({
        onBlur: jest.fn(),
        value: 'Charizard',
        onFocus: onFocusMockFn,
        onMouseEnter: jest.fn(),
        onMouseLeave: jest.fn()
      })
    );

    act(() => result.current.handleFocus({} as any));

    expect(onFocusMockFn).toHaveBeenCalled();
    expect(result.current.focused).toBeTruthy();
  });

  it('should be able to blur the input', () => {
    const onBlurMockFn = jest.fn();

    const { result } = renderHook(() =>
      useTextField({
        value: '',
        onFocus: jest.fn(),
        onBlur: onBlurMockFn,
        onMouseEnter: jest.fn(),
        onMouseLeave: jest.fn()
      })
    );

    act(() => result.current.handleBlur({} as any));

    expect(onBlurMockFn).toHaveBeenCalled();
    expect(result.current.focused).toBeFalsy();
  });

  it('should be able to hover in the input', () => {
    const onMouseEnterMockFn = jest.fn();

    const { result } = renderHook(() =>
      useTextField({
        value: 'Mewtwo',
        onBlur: jest.fn(),
        onFocus: jest.fn(),
        onMouseLeave: jest.fn(),
        onMouseEnter: onMouseEnterMockFn
      })
    );

    act(() => result.current.handleMouseEnter({} as any));

    expect(onMouseEnterMockFn).toHaveBeenCalled();
    expect(result.current.hovered).toBeTruthy();
  });

  it('should be able to hover out the input', () => {
    const onMouseLeaveMockFn = jest.fn();

    const { result } = renderHook(() =>
      useTextField({
        value: 'Squirtle',
        onBlur: jest.fn(),
        onFocus: jest.fn(),
        onMouseEnter: jest.fn(),
        onMouseLeave: onMouseLeaveMockFn
      })
    );

    act(() => result.current.handleMouseLeave({} as any));

    expect(result.current.hovered).toBeFalsy();
    expect(onMouseLeaveMockFn).toHaveBeenCalled();
  });
});
