import { Dimensions } from 'react-native';
import {
  MD3LightTheme as PaperMD3LightTheme,
  MD3DarkTheme as PaperMD3DarkTheme,
  configureFonts,
  useTheme,
} from 'react-native-paper';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationLightTheme,
} from '@react-navigation/native';

import merge from 'deepmerge';

const MergedLightTheme = merge(PaperMD3LightTheme, NavigationLightTheme);
const MergedDarkTheme = merge(PaperMD3DarkTheme, NavigationDarkTheme);

//custom adjustments to make it repsonsive
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const baseWidth = 320; // ui designed based on this width
const baseHeight = 568; // ui designed based on this width

export const responsiveScale = (size: number) => {
  'worklet';
  return (screenWidth / baseWidth) * size;
};

export const responsiveScaleHeight = (size: number) => {
  'worklet';
  return (screenHeight / baseHeight) * size;
};

//Font config
export const FONT_SIZE = {
  XXS: 10,
  XS: 12,
  S: 14,
  M: 16,
  L: 18,
  XL: 22,
  XXL: 24,
  '3XL': 36,
};

//spacing config
export const SPACING = {
  XS: responsiveScale(4),
  S: responsiveScale(8),
  M: responsiveScale(16),
  L: responsiveScale(24),
  XL: responsiveScale(32),
  XXL: responsiveScale(40),
  '3XL': responsiveScale(48),
  '4XL': responsiveScale(56),
  '5XL': responsiveScale(64),
  '6XL': responsiveScale(72),
};

//Font config
const baseFont = {
  fontFamily: 'FontAwesome',
} as const;
const baseVariants = configureFonts({ config: baseFont });

const customVariants = {
  // Customize individual base variants:
  displayLarge: {
    ...baseVariants.displayLarge,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(57),
    fontWeight: '700',
  },
  displayMedium: {
    ...baseVariants.displayMedium,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(45),
    fontWeight: '700',
  },
  displaySmall: {
    ...baseVariants.displaySmall,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(36),
    fontWeight: '700',
  },
  headlineLarge: {
    ...baseVariants.headlineLarge,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(32),
    fontWeight: '700',
  },
  headlineMedium: {
    ...baseVariants.headlineMedium,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(28),
    fontWeight: '700',
  },
  headlineSmall: {
    ...baseVariants.headlineSmall,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(24),
    fontWeight: '700',
  },
  titleLarge: {
    ...baseVariants.titleLarge,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(22),
    fontWeight: '700',
  },
  titleMedium: {
    ...baseVariants.titleMedium,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(16),
    fontWeight: '700',
  },
  titleSmall: {
    ...baseVariants.titleSmall,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(14),
    fontWeight: '700',
  },
  labelLarge: {
    ...baseVariants.labelLarge,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(14),
    fontWeight: '500',
  },
  labelMedium: {
    ...baseVariants.labelMedium,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(12),
    fontWeight: '500',
  },
  labelSmall: {
    ...baseVariants.labelSmall,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(11),
    fontWeight: '500',
  },
  bodyLarge: {
    ...baseVariants.bodyLarge,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(16),
    fontWeight: '400',
  },
  bodyMedium: {
    ...baseVariants.bodyMedium,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(14),
    fontWeight: '400',
  },
  bodySmall: {
    ...baseVariants.bodySmall,
    fontFamily: 'FontAwesome',
    fontSize: responsiveScale(12),
    fontWeight: '400',
  },
} as const;

// Finally, merge base variants with your custom tokens
// and apply custom fonts to your theme.

const fonts = configureFonts({
  config: {
    ...baseVariants,
    ...customVariants,
  },
});

// Then, define custom fonts for different variants

export const CustomLightTheme = {
  ...MergedLightTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...MergedLightTheme.colors,
    myOwnColor: '#BADA55',
    brandPrimary: 'pink',
    brandSecondary: 'red',
  },
  fonts,
};
export const CustomDarkTheme = {
  ...MergedDarkTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...MergedDarkTheme.colors,
    myOwnColor: '#BADA55',
  },
  fonts,
};

export type AppTheme = typeof CustomLightTheme;

export const useAppTheme = () => useTheme<AppTheme>();
