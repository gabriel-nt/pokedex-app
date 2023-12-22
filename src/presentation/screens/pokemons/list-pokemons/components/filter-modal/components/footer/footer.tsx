import * as S from './styles';
import { FilterModalProps } from '../../types';

export const Footer = ({
  onClose,
  onSubmit
}: FilterModalProps.Components.Footer) => (
  <S.Root>
    <S.CancelButtonWrapper>
      <S.CancelButton testID="close-btn" onPress={onClose}>
        <S.CancelButtonText>Close</S.CancelButtonText>
      </S.CancelButton>
    </S.CancelButtonWrapper>

    <S.SubmitButtonWrapper>
      <S.SubmitButton testID="apply-btn" onPress={onSubmit}>
        <S.SubmitButtonText>Apply</S.SubmitButtonText>
      </S.SubmitButton>
    </S.SubmitButtonWrapper>
  </S.Root>
);
