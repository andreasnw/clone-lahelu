import { COLORS, OPACITY } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { StyleSheet } from "react-native";

import InfoBanner from "../../common/InfoBanner";
import { ThemedText } from "../../common/ThemedText";
import { ThemedView } from "../../common/ThemedView";

const PromotionalBanner = () => {
  return (
    <InfoBanner containerStyle={styles.base}>
      <ThemedView style={styles.container}>
        <ThemedText>💰</ThemedText>
        <ThemedText type={"title"} style={styles.title}>
          Kamu punya teman? Sini dapatkan koin gratis!
        </ThemedText>
      </ThemedView>
    </InfoBanner>
  );
};

export default PromotionalBanner;

const styles = StyleSheet.create({
  base: {
    margin: SIZE.spacing.md,
    borderColor: COLORS.dark.primary,
    backgroundColor: COLORS.dark.primary + OPACITY[20],
    paddingVertical: SIZE.spacing.mediumSmall,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "transparent",
    gap: SIZE.spacing.md,
    alignItems: "center",
  },
  title: {
    fontSize: SIZE.text.md,
    flexShrink: 1,
  },
});
