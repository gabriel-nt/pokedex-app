import React from 'react';

import * as S from './styles';
import { AboutTabsProps } from '../../types';

export const TabItem = ({
  label,
  onPress,
  markerColor,
  isActive = false
}: AboutTabsProps.Components.TabItem) => (
  <S.TabItem onPress={onPress} underlayColor="#f1f1f1">
    <React.Fragment>
      <S.TabItemText isDisabled={!isActive}>{label}</S.TabItemText>
      {isActive && <S.TabItemMarker markerColor={markerColor} />}
    </React.Fragment>
  </S.TabItem>
);
