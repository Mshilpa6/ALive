import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  wp,
  hp,
  font,
  moderateScale,
} from '../utils/responsive';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <TouchableOpacity activeOpacity={0.8}>
        <Image
          source={require('../assets/images/erasebg.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </TouchableOpacity>

      {/* Right Icons */}
      <View style={styles.rightContainer}>
        {/* Notification */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.notificationButton}>
          <Ionicons
            name="notifications-outline"
            size={moderateScale(22)}
            color="#555"
          />

          <View style={styles.badge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>

        {/* Wallet */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.walletButton}>
          <Ionicons
            name="wallet-outline"
            size={moderateScale(22)}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
  height: hp(7),

  paddingHorizontal: wp(5),

  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  backgroundColor: '#FFFFFF',
},

  logo: {
    width: wp(14),
    height: wp(14),
    borderRadius: moderateScale(18),
  },

  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  notificationButton: {
    width: wp(11),
    height: wp(11),
    borderRadius: wp(5.5),

    backgroundColor: '#F7F7F7',

    justifyContent: 'center',
    alignItems: 'center',

    marginRight: wp(3.5),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  badge: {
    position: 'absolute',
    top: hp(0.5),
    right: wp(1),

    width: wp(4.8),
    height: wp(4.8),

    borderRadius: wp(2.4),

    backgroundColor: '#FF2D2D',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 2,
    borderColor: '#FFFFFF',
  },

  badgeText: {
    color: '#FFFFFF',
    fontSize: font(9),
    fontWeight: '700',
  },

  walletButton: {
    width: wp(11),
    height: wp(11),

    borderRadius: wp(5.5),

    backgroundColor: '#38C000',

    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#38C000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },
});