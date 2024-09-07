import Loading from "@/components/common/Loading";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { SIZE } from "@/constants/theme/size";
import { StyleSheet } from "react-native";

type EmptyComponentProps = {
  isLoading: boolean;
};

const EmptyComponent = ({ isLoading }: EmptyComponentProps) => {
  if (isLoading) {
    return <Loading />;
  }
  return (
    <ThemedView style={styles.container}>
      <ThemedText>No Post Found</ThemedText>
    </ThemedView>
  );
};

export default EmptyComponent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: SIZE.spacing.sm,
    flex: 1,
  },
});
