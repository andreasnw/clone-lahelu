import { ThemedView } from "@/components/common/ThemedView";
import { StyleSheet } from "react-native";

export default function Post() {
  return <ThemedView style={styles.container}></ThemedView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
