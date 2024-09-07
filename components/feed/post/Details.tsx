import { PostInfo } from "@/api/feed";
import { ThemedView } from "@/components/common/ThemedView";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { StyleSheet } from "react-native";

import Actions from "./Actions";
import Hashtag from "./Hashtag";

type HeaderProps = {
  item: PostInfo;
};

const Details = ({ item }: HeaderProps) => {
  return (
    <ThemedView style={styles.borderBottom}>
      <ThemedView style={styles.container}>
        <Hashtag item={item} />
        <Actions item={item} />
      </ThemedView>
    </ThemedView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: SIZE.spacing.md,
  },
  scrollview: {
    gap: SIZE.spacing.sm,
  },
  hashtagContainer: {
    paddingHorizontal: SIZE.spacing.sm,
    borderWidth: 1,
    borderColor: COLORS.dark.border,
    borderRadius: SIZE.radius.full,
  },
  hashtag: {
    fontSize: SIZE.text.sm,
  },
  borderBottom: {
    borderBottomWidth: 4,
    borderBottomColor: COLORS.dark.black,
    marginBottom: SIZE.spacing.md,
  },
});
