import * as S from '../../styles';
import { formatHeight, formatWeight } from './utils';
import { AboutTabsProps } from '../../types';

export const Info = ({
  pokemon: { types, height, weight, abilities }
}: AboutTabsProps.Components.Info) => (
  <>
    <S.Row>
      <S.LeftColumn>
        <S.LeftColumnText>Species</S.LeftColumnText>
      </S.LeftColumn>
      <S.RightColumn>
        <S.RightColumnText>{types.join(', ')}</S.RightColumnText>
      </S.RightColumn>
    </S.Row>

    <S.Row>
      <S.LeftColumn>
        <S.LeftColumnText>Height</S.LeftColumnText>
      </S.LeftColumn>
      <S.RightColumn>
        <S.RightColumnText>{formatHeight(height)}</S.RightColumnText>
      </S.RightColumn>
    </S.Row>

    <S.Row>
      <S.LeftColumn>
        <S.LeftColumnText>Weight</S.LeftColumnText>
      </S.LeftColumn>
      <S.RightColumn>
        <S.RightColumnText>{formatWeight(weight)}</S.RightColumnText>
      </S.RightColumn>
    </S.Row>

    <S.Row>
      <S.LeftColumn>
        <S.LeftColumnText>Abilities</S.LeftColumnText>
      </S.LeftColumn>
      <S.RightColumn>
        <S.RightColumnText>{abilities.join(', ')}</S.RightColumnText>
      </S.RightColumn>
    </S.Row>
  </>
);
