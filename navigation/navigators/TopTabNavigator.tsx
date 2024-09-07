import { TOP_NAV } from "@/constants/navigation/top";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { ScrollContext } from "@/context/ScrollContext";
import { animateHeader } from "@/utils";
import { TopTabs } from "@bacons/expo-router-top-tabs";
import { Fragment, useContext } from "react";
import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const TopTabNavigator = () => {
  const { scrollY } = useContext(ScrollContext);
  const { translateY, opacity } = animateHeader({
    scrollY,
    size: SIZE.tabHeight.md + SIZE.tabHeight.sm,
  });

  return (
    <TopTabs
      screenOptions={{
        tabBarStyle: {
          ...styles.tabBarStyle,
          transform: [{ translateY }],
          opacity,
        },
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: COLORS.dark.primary,
        tabBarInactiveTintColor: COLORS.dark.text,
      }}
    >
      <TopTabs.Header>
        <Fragment />
      </TopTabs.Header>

      {TOP_NAV.map((item) => (
        <TopTabs.Screen
          key={item.title}
          name={item.name}
          options={{ tabBarLabel: item.title }}
        />
      ))}
    </TopTabs>
  );
};

export default TopTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.dark.background,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: SIZE.tabHeight.md + SIZE.tabHeight.sm + Constants.statusBarHeight,
    justifyContent: "flex-end",
  },
  tabBarIndicatorStyle: {
    backgroundColor: COLORS.dark.primary,
  },
  tabBarLabelStyle: {
    fontSize: SIZE.text.sm,
    fontWeight: "bold",
    textTransform: "none",
    paddingTop: SIZE.spacing.xxs,
  },
});
