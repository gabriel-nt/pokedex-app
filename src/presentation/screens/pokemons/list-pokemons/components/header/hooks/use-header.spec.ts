import { act, renderHook } from '@testing-library/react-native';
import { useHeader } from './use-header';

describe('use header hook', () => {
  it('should be able to toggle filter modal visibility', () => {
    const { result } = renderHook(() => useHeader());

    const { toggleFilterModal } = result.current;

    expect(result.current.isFilterModalVisible).toBeFalsy();

    act(() => toggleFilterModal());

    expect(result.current.isFilterModalVisible).toBeTruthy();
  });

  it('should be able to toggle sort modal visibility', () => {
    const { result } = renderHook(() => useHeader());

    const { toggleSortModal } = result.current;

    expect(result.current.isSortModalVisible).toBeFalsy();

    act(() => toggleSortModal());

    expect(result.current.isSortModalVisible).toBeTruthy();
  });
});
