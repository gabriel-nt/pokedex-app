import { Linking, Platform } from 'react-native';
import { fireEvent } from '@testing-library/react-native';

import { render } from '@/presentation/tests/test-util';
import { JailBreakPopup } from './jail-break-popup';

describe('JailBreakPopup Component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render the jail break popup', () => {
    const { getByText } = render(<JailBreakPopup />);

    expect(getByText('Opps, acesso bloqueado!')).toBeOnTheScreen();
  });

  it('should be able to open the IOS settings', () => {
    jest.replaceProperty(Platform, 'OS', 'ios');

    const handleOpenSettingsFn = jest.fn();
    const { getByTestId } = render(<JailBreakPopup />);

    jest.spyOn(Linking, 'openURL').mockImplementation(handleOpenSettingsFn);
    fireEvent.press(getByTestId('settings-button'));

    expect(handleOpenSettingsFn).toHaveBeenCalled();
  });

  it('should be able to open the Android settings', () => {
    jest.replaceProperty(Platform, 'OS', 'android');

    const handleOpenSettingsFn = jest.fn();
    const { getByTestId } = render(<JailBreakPopup />);

    jest
      .spyOn(Linking, 'openSettings')
      .mockImplementation(handleOpenSettingsFn);

    fireEvent.press(getByTestId('settings-button'));

    expect(handleOpenSettingsFn).toHaveBeenCalled();
  });
});
