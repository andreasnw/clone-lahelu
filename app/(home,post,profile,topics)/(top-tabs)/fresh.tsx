import { ThemedView } from "@/components/common/ThemedView";
import { StyleSheet } from "react-native";

const Fresh = () => {
  return <ThemedView style={styles.container}></ThemedView>;
};

export default Fresh;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
