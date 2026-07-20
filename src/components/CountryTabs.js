import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

import {
  wp,
  hp,
  font,
  moderateScale,
} from '../utils/responsive';

const countries = [
  {
    id: '1',
    name: 'Global',
    flag: '🌐',
  },
  {
    id: '2',
    name: 'India',
    flag: '🇮🇳',
  },
  {
    id: '3',
    name: 'Philippines',
    flag: '🇵🇭',
  },
  {
    id: '4',
    name: 'Brazil',
    flag: '🇧🇷',
  },
  {
    id: '5',
    name: 'Vietnam',
    flag: '🇻🇳',
  },
];

const CountryTabs = () => {
  const [selected, setSelected] = useState('Global');

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}>
        {countries.map(item => {
          const active = selected === item.name;

          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.8}
              onPress={() => setSelected(item.name)}
              style={[
                styles.countryButton,
                active && styles.activeCountryButton,
              ]}>
              <Text style={styles.flag}>{item.flag}</Text>

              <Text
                numberOfLines={1}
                style={[
                  styles.countryText,
                  active && styles.activeCountryText,
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CountryTabs;

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(2),
  },

  scrollContainer: {
    paddingHorizontal: wp(4),
    paddingRight: wp(8),
  },

  countryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    minHeight: hp(4.8),
    paddingHorizontal: wp(4.5),
    paddingVertical: hp(0.7),

    marginRight: wp(3),

    borderRadius: moderateScale(25),

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#E5E5E5',
  },

  activeCountryButton: {
    backgroundColor: '#F3FFE8',
    borderColor: '#38C000',
    borderWidth: 1.5,
  },

  flag: {
    fontSize: font(16),
    marginRight: wp(2),
  },

  countryText: {
    fontSize: font(14),
    color: '#8A8A8A',
    fontWeight: '500',
  },

  activeCountryText: {
    color: '#111111',
    fontWeight: '700',
  },
});