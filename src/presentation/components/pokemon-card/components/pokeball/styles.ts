import styled from 'styled-components/native';

export const Root = styled.View`
  flex: 1;
  justify-content: flex-start;
`;

export const Pokeball = styled.Image`
  position: absolute;
  z-index: -1;
  width: 140px;
  height: 140px;
  opacity: 0.4;
  bottom: -14px;
  right: -24px;
`;
