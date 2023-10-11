import { styled } from 'styled-components/native';

export const Root = styled.View`
  flex: 1;
  margin-top: -30px;
  padding: 14px 20px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: ${({ theme }) => theme.backgrounds.white};
`;

export const TabsWrapper = styled.View`
  align-items: center;
  margin-bottom: 16px;
  flex-direction: row;
  border-bottom-width: 2px;
  border-bottom-color: rgba(0, 0, 0, 0.05);
`;

export const Content = styled.View`
  flex: 1;
  gap: 16px;
  padding: 8px 12px;
`;

export const Row = styled.View`
  gap: 16px;
  align-items: center;
  flex-direction: row;
`;

export const LeftColumn = styled.View`
  width: 20%;
`;

export const LeftColumnText = styled.Text`
  font-size: 16px;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.openSans[500]};
`;

export const RightColumn = styled(LeftColumn)`
  flex: 1;
  gap: 8px;
  align-items: center;
  flex-direction: row;
`;

export const RightColumnText = styled(LeftColumnText)`
  text-transform: capitalize;
  font-family: ${({ theme }) => theme.fonts.roboto[700]};
`;
