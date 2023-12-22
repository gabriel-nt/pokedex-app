import * as S from './styles';
import { PokemonDetailBottomSheetProps } from '../../types';

import { BADGE_IMAGES } from '@/presentation/utils/constants';
import { useBottomSheet } from '@/presentation/hooks/use-bottom-sheet';

export const Header = ({
  id,
  name,
  types
}: PokemonDetailBottomSheetProps.Components.Header) => {
  const { collapse } = useBottomSheet();

  return (
    <S.Root>
      <S.HeadingWrapper>
        <S.GoBackIcon
          testID="close-bottom-sheet"
          name="keyboard-backspace"
          onPress={collapse}
        />
        <S.Title>{name}</S.Title>
        <S.Subtitle>#{String(id).padStart(4, '0')}</S.Subtitle>
      </S.HeadingWrapper>

      <S.BadgeContainer>
        {types.map(type => (
          <S.BadgeImage key={type} source={BADGE_IMAGES[type]} />
        ))}
      </S.BadgeContainer>
    </S.Root>
  );
};
