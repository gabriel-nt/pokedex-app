import * as S from './styles';
import { FilterModalProps } from '../../types';

export const Footer = ({
  onClose,
  onSubmit
}: FilterModalProps.Components.Footer) => (
  <S.Root>
    <S.CancelButtonWrapper>
      <S.CancelButton onPress={onClose}>
        <S.CancelButtonText>Close</S.CancelButtonText>
      </S.CancelButton>
    </S.CancelButtonWrapper>

    <S.SubmitButtonWrapper>
      <S.SubmitButton onPress={onSubmit}>
        <S.SubmitButtonText>Apply</S.SubmitButtonText>
      </S.SubmitButton>
    </S.SubmitButtonWrapper>
  </S.Root>
);
