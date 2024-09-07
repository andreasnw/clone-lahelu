import { DRAWER_NAV } from "@/constants/navigation/drawer";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Href, router, usePathname } from "expo-router";
import { StyleSheet } from "react-native";

import PostInfo from "./PostInfo";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  const pathname = usePathname();

  const handleDrawerItemPress = (route: string) => {
    router.push(route as Href<string>);
  };

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <PostInfo />

      {DRAWER_NAV.map((item, index) => {
        const Icon = item.icon;
        const current = item.route.replace("/(home)", "");
        const isFocused = pathname === current;
        return (
          <DrawerItem
            key={index}
            icon={() => <Icon color={COLORS.dark.text} fill={COLORS.dark.text} width={SIZE.icon.xs} height={SIZE.icon.xs} />}
            label={item.title}
            onPress={() => handleDrawerItemPress(item.route)}
            labelStyle={[styles.label, isFocused ? styles.bold : styles.normal]}
            style={[
              styles.item,
              {
                backgroundColor: isFocused
                  ? COLORS.dark.primary
                  : COLORS.dark.background,
              },
            ]}
          />
        );
      })}
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark.background,
  },
  label: {
    color: COLORS.dark.text,
    alignItems: "flex-start",
    marginLeft: -SIZE.spacing.lg,
    fontSize: SIZE.text.md,
    marginVertical: SIZE.spacing.none,
  },
  item: {
    marginHorizontal: SIZE.spacing.none,
    marginVertical: SIZE.spacing.none,
    borderRadius: SIZE.radius.none,
    paddingHorizontal: SIZE.spacing.md,
  },
  bold: {
    fontWeight: "bold",
  },
  normal: {
    fontWeight: "normal",
  },
});
