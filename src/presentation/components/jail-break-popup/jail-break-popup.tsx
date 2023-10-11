import JailMonkey from 'jail-monkey';
import { Linking, Platform } from 'react-native';

import * as S from './styles';

import logoImg from '@/presentation/assets/images/logo.png';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect, useState } from 'react';

export const JailBreakPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(
      !JailMonkey.isDebuggedMode() &&
        (JailMonkey.isOnExternalStorage() || JailMonkey.trustFall())
    );
  }, []);

  const handleOpenSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else {
      Linking.openSettings();
    }
  };

  return (
    <S.Modal visible={isVisible} animationType="fade" transparent>
      <S.OverlayContent>
        <GestureHandlerRootView>
          <S.Content>
            <S.LogoImage source={logoImg} />

            <S.Title>Opps, acesso bloqueado!</S.Title>
            <S.Description>
              Notamos algo malicioso em seu dispositivo. Por favor, remova o
              mesmo e tente acessar novamente.
            </S.Description>

            <S.ButtonWrapper>
              <S.Button onPress={handleOpenSettings}>
                <S.ButtonText>Abrir configs</S.ButtonText>
              </S.Button>
            </S.ButtonWrapper>
          </S.Content>
        </GestureHandlerRootView>
      </S.OverlayContent>
    </S.Modal>
  );
};
