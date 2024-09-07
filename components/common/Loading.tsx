import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { ActivityIndicator, StyleSheet } from "react-native";

import { ThemedView } from "./ThemedView";

const Loading = () => {
  return (
    <ThemedView style={styles.container}>
      <ActivityIndicator color={COLORS.dark.primary} size={"large"} />
    </ThemedView>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZE.spacing.sm,
    flex: 1,
  },
});
