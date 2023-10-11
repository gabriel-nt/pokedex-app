import styled from 'styled-components/native';

export const Root = styled.View``;

export const Title = styled.Text`
  font-size: 16px;
  padding-bottom: 12px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.openSans[700]};
`;

export const ListWrapper = styled.View`
  gap: 16px;
  padding: 8px 12px;
`;

export const ListItemWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const EmptyListText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.openSans[500]};
`;
