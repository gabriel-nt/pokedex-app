import { ReactNode } from 'react';

export type BottomSheetContextProviderProps = {
  children: React.ReactNode;
};

export type BottomSheetContextData = {
  collapse: () => void;
  expand: (content: ReactNode) => void;
};
