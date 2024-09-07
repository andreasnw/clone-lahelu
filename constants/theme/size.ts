import { Dimensions } from "react-native";

export const SIZE = {
  text: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },
  icon: {
    xxs: 16,
    xs: 20,
    sm: 24,
    md: 32,
    lg: 40,
  },
  spacing: {
    none: 0,
    xxs: 2,
    xs: 4,
    sm: 8,
    mediumSmall: 12,
    md: 16,
    lg: 20,
    xl: 24,
    xxl: 48,
  },
  radius: {
    none: 0,
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    full: 9999,
  },
  tabHeight: {
    sm: 40,
    md: 50,
    lg: 56,
  },
  screen: {
    screenWidth: Dimensions.get("window").width,
    screenHeight: Dimensions.get("window").height,
  },
};
