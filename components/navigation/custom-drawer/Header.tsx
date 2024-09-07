import Post from "@/assets/icons/bottom-nav-bar/Post";
import Profile from "@/assets/icons/bottom-nav-bar/Profile";
import Menu from "@/assets/icons/drawer/Menu";
import Search from "@/assets/icons/drawer/Search";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { ACTIVE_OPACITY } from "@/constants";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { getScreenSize } from "@/utils";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Fragment } from "react/jsx-runtime";

export const HeaderTitle = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.logo} type="title">
        LAHELU
      </ThemedText>
    </ThemedView>
  );
};

type HeaderLeftProps = {
  navigation: {
    openDrawer: () => void;
  };
};

export const HeaderLeft = ({ navigation }: HeaderLeftProps) => {
  return (
    <TouchableOpacity
      style={styles.iconLeft}
      activeOpacity={ACTIVE_OPACITY}
      onPress={() => navigation.openDrawer()}
    >
      <Menu
        width={SIZE.icon.sm}
        height={SIZE.icon.sm}
        color={COLORS.dark.text}
      />
    </TouchableOpacity>
  );
};

export const HeaderRight = () => {
  const screenSize = getScreenSize();

  return (
    <ThemedView style={styles.headerRight}>
      <TouchableOpacity
        style={screenSize !== "md" && styles.iconRight}
        activeOpacity={ACTIVE_OPACITY}
      >
        <Search
          width={SIZE.icon.sm}
          height={SIZE.icon.sm}
          color={COLORS.dark.text}
        />
      </TouchableOpacity>
      {screenSize === "md" && (
        <Fragment>
          <TouchableOpacity activeOpacity={ACTIVE_OPACITY}>
            <Post
              width={SIZE.icon.sm}
              height={SIZE.icon.sm}
              color={COLORS.dark.text}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={ACTIVE_OPACITY}
            style={screenSize === "md" && styles.iconRight}
          >
            <Profile
              width={SIZE.icon.sm}
              height={SIZE.icon.sm}
              color={COLORS.dark.text}
            />
          </TouchableOpacity>
        </Fragment>
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.dark.primary,
    textShadowColor: "#4f738b",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 0.1,
  },
  iconLeft: {
    marginLeft: SIZE.spacing.xl,
    marginRight: SIZE.spacing.md,
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZE.spacing.xl,
  },
  iconRight: {
    marginRight: SIZE.spacing.xl,
  },
});
