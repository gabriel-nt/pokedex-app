import React from 'react';

import * as S from './styles';
import { Atoms } from './components';
import { EvolutionProps } from './types';

export const Evolution = ({ data }: EvolutionProps.Default) => (
  <S.Root>
    <S.Title>Evolution Chain</S.Title>

    {data.length > 0 ? (
      <S.ListWrapper>
        {data.map((item, i) => (
          <S.ListItemWrapper key={item.minLevel + i}>
            {item.pokemons.map((pokemon, index) => (
              <React.Fragment key={pokemon.id}>
                <Atoms.Pokemon id={pokemon.id} name={pokemon.name} />
                {index === 0 && (
                  <Atoms.TriggerLevel
                    level={item.minLevel}
                    trigger={item.trigger}
                  />
                )}
              </React.Fragment>
            ))}
          </S.ListItemWrapper>
        ))}
      </S.ListWrapper>
    ) : (
      <S.EmptyListText>This pokemon doesn't have an evolution</S.EmptyListText>
    )}
  </S.Root>
);
