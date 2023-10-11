import React, { useCallback, useState } from 'react';

import * as S from './styles';
import { TabItem, Info, BaseStats, Evolution } from './components';
import { PokemonDetailBottomSheetProps } from '../../types';

const tabs = ['About', 'Base Stats', 'Evolution'];

export const AboutTabs = ({
  data
}: PokemonDetailBottomSheetProps.Components.AboutTabs) => {
  const [activeTab, setActiveTab] = useState(0);

  function handleTabChange(value: number) {
    setActiveTab(value);
  }

  const renderContent = useCallback(() => {
    switch (activeTab) {
      case 0:
        return <Info pokemon={data} />;
      case 1:
        return <BaseStats stats={data.stats} pokemonType={data.types[0]} />;
      default:
        return <Evolution data={data.evolution} />;
    }
  }, [activeTab]);

  return (
    <S.Root>
      <S.TabsWrapper>
        {tabs.map((tab, index) => (
          <TabItem
            key={tab}
            label={tab}
            markerColor={data.types[0]}
            isActive={activeTab === index}
            onPress={() => handleTabChange(index)}
          />
        ))}
      </S.TabsWrapper>

      <S.Content>{renderContent()}</S.Content>
    </S.Root>
  );
};
