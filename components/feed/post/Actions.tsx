import { PostInfo } from "@/api/feed";
import Arrow from "@/assets/icons/feed/Arrow";
import Comment from "@/assets/icons/feed/Comment";
import Share from "@/assets/icons/feed/Share";
import ThemedButton from "@/components/common/ThemedButton";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { StyleSheet } from "react-native";

type ActionsProps = {
  item: PostInfo;
};

type ActionPayload = "like" | "dislike" | "comment" | "share";

const Actions = ({ item }: ActionsProps) => {
  const handleAction = (action: ActionPayload) => {
    // no-op
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.reaction}>
        <ThemedButton
          containerStyle={[styles.button, styles.likes]}
          onPress={() => handleAction("like")}
        >
          <Arrow
            width={SIZE.icon.xs}
            height={SIZE.icon.xs}
            stroke={COLORS.dark.text}
          />
          <ThemedText type={"title"} style={styles.text}>
            {item.totalUpvotes}
          </ThemedText>
        </ThemedButton>
        <ThemedButton
          containerStyle={[styles.button, styles.dislike]}
          onPress={() => handleAction("dislike")}
        >
          <Arrow
            width={SIZE.icon.xs}
            height={SIZE.icon.xs}
            stroke={COLORS.dark.text}
          />
        </ThemedButton>
        <ThemedButton
          containerStyle={[styles.button, styles.reaction]}
          onPress={() => handleAction("comment")}
        >
          <Comment
            width={SIZE.icon.xs}
            height={SIZE.icon.xs}
            stroke={COLORS.dark.text}
          />
          <ThemedText type={"title"} style={styles.text}>
            {item.totalComments}
          </ThemedText>
        </ThemedButton>
      </ThemedView>
      <ThemedButton
        containerStyle={styles.button}
        onPress={() => handleAction("share")}
      >
        <Share
          width={SIZE.icon.xs}
          height={SIZE.icon.xs}
          fill={COLORS.dark.text}
        />
      </ThemedButton>
    </ThemedView>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    paddingVertical: SIZE.spacing.none,
    paddingHorizontal: SIZE.spacing.mediumSmall,
    borderRadius: SIZE.radius.sm,
    height: SIZE.icon.lg,
    justifyContent: "center",
    gap: SIZE.spacing.sm,
    borderColor: COLORS.dark.border,
    borderWidth: 1,
    backgroundColor: "transparent",
  },
  reaction: {
    flexDirection: "row",
    alignItems: "center",
  },
  likes: {
    flexDirection: "row",
    alignItems: "center",
    borderTopRightRadius: SIZE.radius.none,
    borderBottomRightRadius: SIZE.radius.none,
  },
  dislike: {
    borderTopRightRadius: SIZE.radius.none,
    borderBottomRightRadius: SIZE.radius.none,
    borderRightWidth: 0,
    marginRight: SIZE.spacing.md,
    transform: [{ rotate: "180deg" }],
  },
  text: {
    fontSize: SIZE.text.md,
  },
});
