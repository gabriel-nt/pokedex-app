import { styled } from 'styled-components/native';

import { TouchableHighlight } from 'react-native';
import { AboutTabsProps } from '../../types';

export const TabItem = styled(TouchableHighlight)`
  padding: 16px;
  position: relative;
`;

export const TabItemText = styled.Text<AboutTabsProps.Styles.TabItem>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.openSans[700]};
  color: ${({ theme, isDisabled }) =>
    !isDisabled ? theme.colors.dark : 'rgba(0, 0, 0, 0.2)'};
`;

export const TabItemMarker = styled.View<AboutTabsProps.Styles.TabItemMarker>`
  left: 0;
  right: 0;
  height: 3px;
  bottom: -2px;
  position: absolute;
  background-color: ${({ theme, markerColor }) =>
    theme.backgrounds[markerColor]};
`;
