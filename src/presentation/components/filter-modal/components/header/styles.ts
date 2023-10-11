import styled from 'styled-components/native';

export const Root = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Heading = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.roboto[700]};
`;

export const ClearFilterButton = styled.TouchableHighlight``;

export const ClearFilterText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.roboto[400]};
`;
