import * as S from './styles';
import { Atoms } from './components';
import { PokemonDetailBottomSheetProps } from './types';

export const PokemonDetailBottomSheet = ({
  pokemon
}: PokemonDetailBottomSheetProps.Default) => {
  return (
    <S.Root type={pokemon.types[0]}>
      <Atoms.Header id={pokemon.id} name={pokemon.name} types={pokemon.types} />
      <Atoms.Content id={pokemon.id} />
      <Atoms.AboutTabs data={pokemon} />
    </S.Root>
  );
};
