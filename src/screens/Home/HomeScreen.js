import React, { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ScreenComponentView from '../../components/MainScreenComponent/ScreenComponentView';

import Header from '../../components/Header';
import CategoryTabs from '../../components/CategoryTabs';
import CountryTabs from '../../components/CountryTabs';
import LiveCard from '../../components/LiveCard';
import BottomNav from '../../components/BottomNav';

const DATA = [
  {
    id: '1',
    name: 'Sofia Chen',
    image: require('../../assets/images/photo1.jpeg'),
    viewers: '8.2K',
    country: '🇵🇭',
  },
  {
    id: '2',
    name: 'Emma',
    image: require('../../assets/images/photo2.jpeg'),
    viewers: '5.6K',
    country: '🇮🇳',
  },
  {
    id: '3',
    name: 'Jessica',
    image: require('../../assets/images/photo3.jpeg'),
    viewers: '9.1K',
    country: '🇧🇷',
  },
  {
    id: '4',
    name: 'Linda',
    image: require('../../assets/images/photo4.jpeg'),
    viewers: '7.8K',
    country: '🇻🇳',
  },
  {
    id: '5',
    name: 'Linda',
    image: require('../../assets/images/photo4.jpeg'),
    viewers: '8.8K',
    country: '🇻🇳',
  },
  {
    id: '6',
    name: 'Linda',
    image: require('../../assets/images/photo4.jpeg'),
    viewers: '8.5K',
    country: '🇻🇳',
  },

];

const HomeScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Popular');

  const RenderHeaderView = () => (
    <>
      <Header />

      <CategoryTabs
        selected={selectedTab}
        onSelect={setSelectedTab}
      />

      <CountryTabs />
    </>
  );

  const RenderBodyView = (
    <FlatList
      data={DATA}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <LiveCard item={item} />}
      numColumns={2}
      columnWrapperStyle={styles.row}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.listContainer}
    />
  );

  const RenderBottomView = <BottomNav />;

  return (
    <ScreenComponentView
      MainHeadingChild={RenderHeaderView()}
      MainBodyChild={RenderBodyView}
      MainBottomChild={RenderBottomView}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: 12,
    paddingBottom: 120,
  },

  row: {
    justifyContent: 'space-between',
  },
});

export default HomeScreen;