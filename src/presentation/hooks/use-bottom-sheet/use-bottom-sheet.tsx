import { useContext } from 'react';
import { BottomSheetContext } from '@/presentation/contexts';

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);

  if (!context || !Object.keys(context).length) {
    throw new Error('useBottomSheet must be used within BottomSheetProvider');
  }

  return context;
};
