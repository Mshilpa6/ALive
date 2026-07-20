import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {
  wp,
  hp,
  font,
  moderateScale,
} from '../utils/responsive';

const tabs = ['Stream', 'Hot', 'Follow'];

const CategoryTabs = ({selected, onSelect}) => {
  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const active = selected === tab;

        return (
          <TouchableOpacity
            key={tab}
            activeOpacity={0.8}
            onPress={() => onSelect(tab)}
            style={styles.tabButton}>
            <Text
              style={[
                styles.tabText,
                active && styles.activeTabText,
              ]}>
              {tab}
            </Text>

            {active && <View style={styles.indicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: wp(5),

    marginTop: hp(1),
    marginBottom: hp(2),

    backgroundColor: '#FFFFFF',
  },

  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',

    marginRight: wp(8),
  },

  tabText: {
    fontSize: font(18),
    fontWeight: '500',
    color: '#9E9E9E',
  },

  activeTabText: {
    color: '#38C000',
    fontWeight: '700',
  },

  indicator: {
    marginTop: hp(0.5),

    width: wp(7),
    height: moderateScale(4),

    borderRadius: moderateScale(2),

    backgroundColor: '#38C000',
  },
});