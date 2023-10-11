import { useWindowDimensions } from 'react-native';

import * as S from './styles';
import { useListPokemons } from './hooks';
import { Header, PokemonDetailBottomSheet } from './components';

import { BottomSheetProvider } from '@/presentation/contexts';
import {
  Skeleton,
  PokemonCard,
  JailBreakPopup
} from '@/presentation/components';
import backgroundImg from '@/presentation/assets/images/background.jpg';
import { useBottomSheet } from '@/presentation/hooks/use-bottom-sheet/use-bottom-sheet';

const MainScreen = () => {
  const { expand } = useBottomSheet();
  const width = useWindowDimensions().width - 32;
  const { pokemons, isLoading } = useListPokemons();

  return (
    <S.Root source={backgroundImg} resizeMode="repeat">
      <Header />

      {isLoading ? (
        <S.ScrollView>
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton width={width} height={130} key={index} />
          ))}
        </S.ScrollView>
      ) : (
        <S.Content
          data={pokemons}
          estimatedItemSize={130}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PokemonCard
              pokemon={item}
              onPress={() =>
                expand(<PokemonDetailBottomSheet pokemon={item} />)
              }
            />
          )}
        />
      )}
    </S.Root>
  );
};

export const Main = () => (
  <BottomSheetProvider>
    <MainScreen />
    <JailBreakPopup />
  </BottomSheetProvider>
);
