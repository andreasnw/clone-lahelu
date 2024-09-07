import CustomDrawer from "@/components/navigation/custom-drawer/CustomDrawer";
import {
  HeaderLeft,
  HeaderRight,
  HeaderTitle,
} from "@/components/navigation/custom-drawer/Header";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { ScrollContext } from "@/context/ScrollContext";
import { animateHeader } from "@/utils";
import Constants from "expo-constants";
import { Drawer } from "expo-router/drawer";
import { useContext } from "react";
import { Platform, StyleSheet } from "react-native";

export default function DrawerNavigator() {
  const { scrollY } = useContext(ScrollContext);
  const { translateY, opacity } = animateHeader({
    scrollY,
    size: SIZE.tabHeight.md,
  });

  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={({ navigation }) => ({
        drawerStyle: styles.drawerStyle,
        drawerContentContainerStyle: styles.drawerContentContainerStyle,
        drawerActiveBackgroundColor: COLORS.dark.primary,
        drawerActiveTintColor: COLORS.dark.text,
        drawerLabelStyle: styles.drawerLabelStyle,
        drawerItemStyle: styles.drawerItemStyle,
        headerTintColor: COLORS.dark.text,
        headerTitleAlign: "left",
        headerTitleContainerStyle: styles.headerTitleContainerStyle,
        headerLeftContainerStyle: styles.headerLeftContainerStyle,
        headerTransparent: true,
        headerStyle: {
          opacity,
          height: SIZE.tabHeight.md + Constants.statusBarHeight,
          transform: [{ translateY }],
        },
        headerTitle: () => <HeaderTitle />,
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerRight: () => <HeaderRight />,
      })}
    />
  );
}

const styles = StyleSheet.create({
  drawerStyle: {
    maxWidth:
      Platform.OS === "ios" ? "auto" : (SIZE.screen.screenWidth * 60) / 100,
  },
  drawerContentContainerStyle: {
    flex: 1,
    backgroundColor: COLORS.dark.primary,
  },
  headerTitleContainerStyle: {
    left: -SIZE.spacing.md,
  },
  headerLeftContainerStyle: {
    alignItems: "center",
  },
  drawerLabelStyle: {
    marginRight: -SIZE.spacing.md,
  },
  drawerItemStyle: {
    backgroundColor: COLORS.dark.text,
  },
});
