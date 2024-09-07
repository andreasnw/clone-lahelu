import { PostInfo } from "@/api/feed";
import Meatballs from "@/assets/icons/feed/Meatballs";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { getSmallestDifference } from "@/utils";
import { Image, StyleSheet } from "react-native";

type HeaderProps = {
  item: PostInfo;
};

const Header = ({ item }: HeaderProps) => {
  const bucketUrl = process.env.EXPO_PUBLIC_BUCKET_URL;
  const createdAt = getSmallestDifference(
    new Date(),
    new Date(item.createTime)
  );

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[styles.user, styles.row]}>
        <ThemedView style={styles.row}>
          <Image
            source={{
              uri: bucketUrl + item.userAvatar,
            }}
            style={styles.avatar}
          />
          <ThemedText
            darkColor={COLORS.dark.text}
            type={"title"}
            style={styles.name}
          >
            {item.userUsername}
            <ThemedText
              darkColor={COLORS.dark.icon}
              style={[styles.name, styles.normal]}
            >
              {" "}
              • {createdAt}
            </ThemedText>
          </ThemedText>
        </ThemedView>
        <Meatballs
          width={SIZE.icon.xs}
          height={SIZE.icon.xs}
          stroke={COLORS.dark.text}
        />
      </ThemedView>
      <ThemedText
        darkColor={COLORS.dark.text}
        type={"title"}
        style={styles.title}
      >
        {item.title}
      </ThemedText>
    </ThemedView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZE.spacing.md,
    gap: SIZE.spacing.sm,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: SIZE.spacing.sm,
  },
  user: {
    gap: SIZE.spacing.sm,
    justifyContent: "space-between",
  },
  name: { fontSize: SIZE.text.xs },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: SIZE.radius.full,
  },
  title: {
    fontSize: SIZE.text.md,
    marginBottom: SIZE.spacing.sm,
  },
  normal: {
    fontWeight: "normal",
  },
});
