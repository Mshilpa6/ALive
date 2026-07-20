import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const BottomNav = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.wrapper,
        {
          paddingBottom: insets.bottom,
        },
      ]}>
      {/* Floating Go Live Button */}
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.liveButton}>
        <View style={styles.liveCircle}>
          <Ionicons
            name="radio"
            size={28}
            color="#FF006E"
          />
        </View>
      </TouchableOpacity>

      <LinearGradient
       colors={[
              '#E8FF00',
              '#73DB09',
              '#06A51E',
            ]}
        locations={[0, 0.25, 0.5, 0.75, 1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.container}>
        <TouchableOpacity style={styles.item}>
          <Ionicons
            name="home"
            size={24}
            color="#fff"
          />
          <Text style={styles.activeText}>Home</Text>//navigating home page
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons
            name="sparkles-outline"
            size={24}
            color="#fff"
          />
          <Text style={styles.text}>Party</Text>
        </TouchableOpacity>

        <View style={styles.centerSpace} />

        <TouchableOpacity style={styles.item}>
          <Ionicons
            name="paper-plane-outline"
            size={24}
            color="#fff"
          />
          <Text style={styles.text}>Chats</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Ionicons
            name="person-outline"
            size={24}
            color="#fff"
          />
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </LinearGradient>

      <Text style={styles.liveText}>Go Live</Text>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
  },

  container: {
    height: 78,

    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

    paddingHorizontal: 15,

    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,

    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 18,
  },

  item: {
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },

  centerSpace: {
    width: 80,
  },

  text: {
    marginTop: 4,
    color: '#FFF',
    fontSize: 13,
    fontWeight: '600',
  },

  activeText: {
    marginTop: 4,
    color: '#FFF',
    fontSize: 13,
    fontWeight: '700',
  },

  liveButton: {
    position: 'absolute',
    alignSelf: 'center',
    top: -34,
    zIndex: 100,
  },

  liveCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,

    backgroundColor: '#FFFFFF',

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 6,
    borderColor: '#F5F5F5',

    shadowColor: '#FF006E',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.35,
    shadowRadius: 10,

    elevation: 15,
  },

  liveText: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 8,

    color: '#FFFFFF',

    fontSize: 13,
    fontWeight: '700',
  },
});