import { useTheme } from 'styled-components/native';
import { ReactNode, createContext, useState } from 'react';
import { Modalize, useModalize } from 'react-native-modalize';

import {
  BottomSheetContextData,
  BottomSheetContextProviderProps
} from './types';

export const BottomSheetContext = createContext({} as BottomSheetContextData);

export const BottomSheetProvider = ({
  children
}: BottomSheetContextProviderProps) => {
  const theme = useTheme();
  const [content, setContent] = useState<ReactNode | null>(null);

  const { ref: bottomSheetRef, open, close } = useModalize();

  const handleOpenBottomSheet = (newContent: ReactNode) => {
    setContent(newContent);
    open();
  };

  return (
    <BottomSheetContext.Provider
      value={{
        collapse: close,
        expand: handleOpenBottomSheet
      }}>
      <Modalize
        ref={bottomSheetRef}
        withOverlay
        adjustToContentHeight
        handlePosition="inside"
        overlayStyle={{
          backgroundColor: theme.backgrounds.blackOpacity
        }}
        handleStyle={{
          backgroundColor: theme.colors.light04
        }}>
        {content}
      </Modalize>
      {children}
    </BottomSheetContext.Provider>
  );
};
