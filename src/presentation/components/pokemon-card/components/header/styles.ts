import styled from 'styled-components/native';

export const Root = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: 500;
  margin-bottom: -6px;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.colors.light04};
  font-family: ${({ theme }) => theme.fonts.roboto[500]};
`;

export const Name = styled.Text`
  font-size: 22px;
  overflow: hidden;
  margin-bottom: 8px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.openSans[700]};
`;

export const BadgeContainer = styled.View`
  gap: 8px;
  flex-direction: row;
  justify-content: flex-start;
`;

export const BadgeImage = styled.Image``;
