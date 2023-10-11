import { useMemo } from 'react';

import * as S from '../../styles';
import { AboutTabsProps } from '../../types';
import { ProgressBar } from '../progress-bar';

export const BaseStats = ({
  stats,
  pokemonType
}: AboutTabsProps.Components.BaseStats) => {
  const totalStats = useMemo(
    () => stats.reduce((acc, stat) => acc + stat.base_stat, 0),
    [stats]
  );

  return (
    <>
      {stats.map(stat => (
        <S.Row key={stat.name}>
          <S.LeftColumn
            style={{
              width: '36%'
            }}>
            <S.LeftColumnText>{stat.name}</S.LeftColumnText>
          </S.LeftColumn>
          <S.RightColumn>
            <S.RightColumnText>{stat.base_stat}</S.RightColumnText>
            <ProgressBar value={stat.base_stat} color={pokemonType} />
          </S.RightColumn>
        </S.Row>
      ))}

      <S.Row>
        <S.LeftColumn
          style={{
            width: '36%'
          }}>
          <S.LeftColumnText>Total</S.LeftColumnText>
        </S.LeftColumn>
        <S.RightColumn>
          <S.RightColumnText>{totalStats}</S.RightColumnText>
          <ProgressBar value={totalStats / 6} color={pokemonType} />
        </S.RightColumn>
      </S.Row>
    </>
  );
};
