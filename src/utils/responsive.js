import {Dimensions, PixelRatio} from 'react-native';

const {width, height} = Dimensions.get('window');

// Base design size (iPhone X)
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

/**
 * Width Percentage
 * Example: wp(50) => 50% of screen width
 */
export const wp = percentage => {
  return (width * percentage) / 100;
};

/**
 * Height Percentage
 * Example: hp(10) => 10% of screen height
 */
export const hp = percentage => {
  return (height * percentage) / 100;
};

/**
 * Scale based on screen width
 */
export const scale = size => {
  return (width / guidelineBaseWidth) * size;
};

/**
 * Scale based on screen height
 */
export const verticalScale = size => {
  return (height / guidelineBaseHeight) * size;
};

/**
 * Moderate Scale
 * Best for paddings, margins, border radius
 */
export const moderateScale = (size, factor = 0.5) => {
  return size + (scale(size) - size) * factor;
};

/**
 * Responsive Font Size
 */
export const font = size => {
  return Math.round(
    PixelRatio.roundToNearestPixel(moderateScale(size)),
  );
};

/**
 * Export screen dimensions if needed
 */
export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

/**
 * Responsive spacing helper
 * Example: spacing.md
 */
export const spacing = {
  xs: moderateScale(4),
  sm: moderateScale(8),
  md: moderateScale(12),
  lg: moderateScale(16),
  xl: moderateScale(20),
  xxl: moderateScale(24),
};

/**
 * Common border radius
 */
export const radius = {
  sm: moderateScale(6),
  md: moderateScale(10),
  lg: moderateScale(16),
  xl: moderateScale(22),
  round: 999,
};