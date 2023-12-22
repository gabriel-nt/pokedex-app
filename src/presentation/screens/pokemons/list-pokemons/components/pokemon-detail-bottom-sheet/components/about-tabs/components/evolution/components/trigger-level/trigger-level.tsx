import { EvolutionProps } from '../../types';
import * as S from './styles';

export const TriggerLevel = ({
  level,
  trigger
}: EvolutionProps.Components.TriggerLevel) => (
  <S.Root>
    <S.TriggerIcon name="arrow-right-thin" />
    <S.Level>
      {level
        ? `Lvl ${level}`
        : trigger
        ? `Use ${trigger}`
        : ' Undefined Trigger'}
    </S.Level>
  </S.Root>
);
