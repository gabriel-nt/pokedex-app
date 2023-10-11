import styled from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Root = styled.View`
  padding: 0 16px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoImage = styled.Image`
  width: 110px;
  height: 62px;
`;

export const MenuOptionsWrapper = styled.View`
  gap: 4px;
  flex-direction: row;
`;

export const MenuOptionBox = styled.View`
  position: relative;
`;

export const FilterBadge = styled.View`
  top: 3px;
  right: 1px;
  width: 12px;
  height: 12px;
  z-index: 1000;
  position: absolute;
  border-radius: 999px;
  background: ${({ theme }) => theme.backgrounds.purple};
`;

export const FilterIcon = styled(Ionicons)`
  padding: 4px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const SortIcon = styled(MaterialCommunityIcons)`
  padding: 4px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;
