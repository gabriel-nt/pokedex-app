import { styled } from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Root = styled.View`
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const Level = styled.Text`
  font-size: 14px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.openSans[700]};
`;

export const TriggerIcon = styled(MaterialCommunityIcons)`
  font-size: 36px;
  color: ${({ theme }) => theme.colors.gray};
`;
