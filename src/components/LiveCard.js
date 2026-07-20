import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  SCREEN_WIDTH,
  wp,
  hp,
  font,
  moderateScale,
} from '../utils/responsive';

const CARD_MARGIN = wp(1.5);
const HORIZONTAL_PADDING = wp(3);

// Card width for 2-column layout
const CARD_WIDTH =
  (SCREEN_WIDTH - HORIZONTAL_PADDING * 2 - CARD_MARGIN * 2) / 2;

const LiveCard = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={styles.card}>
      <Image
        source={item.image}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.overlay} />

      {/* Top */}
      <View style={styles.topContainer}>
        <View style={styles.viewerBadge}>
          <Ionicons
            name="eye-outline"
            size={moderateScale(13)}
            color="#fff"
          />
          <Text style={styles.viewerText}>{item.viewers}</Text>
        </View>
      </View>

      {/* Bottom */}
      <View style={styles.bottomContainer}>
        <View style={styles.userRow}>
          <View style={styles.userInfo}>
            <Text
              numberOfLines={1}
              style={styles.name}>
              {item.name}
            </Text>

            <Text
              numberOfLines={1}
              style={styles.country}>
              {item.country} Philippines
            </Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.followBtn}>
            <Text style={styles.followText}>
              + Follow
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LiveCard;

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    aspectRatio: 0.72,

    borderRadius: moderateScale(20),

    overflow: 'hidden',

    backgroundColor: '#DDD',

    marginBottom: hp(2),
  },

  image: {
    ...StyleSheet.absoluteFillObject,

    width: '100%',
    height: '100%',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,

    backgroundColor: 'rgba(0,0,0,0.18)',
  },

  topContainer: {
    position: 'absolute',

    top: hp(1.5),
    left: wp(3),
    right: wp(3),

    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  viewerBadge: {
    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: wp(2),
    paddingVertical: hp(0.45),

    backgroundColor: 'rgba(0,0,0,0.45)',

    borderRadius: moderateScale(20),
  },

  viewerText: {
    color: '#FFF',

    marginLeft: wp(1),

    fontSize: font(11),

    fontWeight: '600',
  },

  bottomContainer: {
    position: 'absolute',

    left: wp(3),
    right: wp(3),
    bottom: hp(1.5),
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  userInfo: {
    flex: 1,
    paddingRight: wp(2),
  },

  name: {
    color: '#FFF',

    fontSize: font(15),

    fontWeight: '700',
  },

  country: {
    color: '#FFF',

    fontSize: font(11),

    marginTop: hp(0.3),

    opacity: 0.9,
  },

  followBtn: {
    backgroundColor: '#E9FF00',

    paddingHorizontal: wp(3.5),
    paddingVertical: hp(0.8),

    borderRadius: moderateScale(20),

    justifyContent: 'center',
    alignItems: 'center',
  },

  followText: {
    color: '#222',

    fontSize: font(12),

    fontWeight: '700',
  },
});