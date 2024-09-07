import { PostInfo } from "@/api/feed";
import HashtagIcon from "@/assets/icons/feed/Hashtag";
import Sawer from "@/assets/icons/feed/Sawer";
import ThemedButton from "@/components/common/ThemedButton";
import { ThemedText } from "@/components/common/ThemedText";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { ScrollView, StyleSheet } from "react-native";

type HashtagProps = {
  item: PostInfo;
};

type BodyProps = {
  icon: JSX.Element;
  hashtag: string;
  tip?: boolean;
};

const Body = ({ icon, hashtag, tip }: BodyProps) => {
  const onPress = () => {
    //no-op
  };

  return (
    <ThemedButton
      containerStyle={[styles.container, tip ? styles.tip : {}]}
      onPress={onPress}
    >
      {icon}
      <ThemedText style={styles.hashtag} type={"title"}>
        {hashtag}
      </ThemedText>
    </ThemedButton>
  );
};

const Hashtag = ({ item }: HashtagProps) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollview}
      showsHorizontalScrollIndicator={false}
    >
      <Body
        hashtag={"Sawer"}
        icon={
          <Sawer
            fill={COLORS.dark.text}
            width={SIZE.icon.xxs}
            height={SIZE.icon.xxs}
          />
        }
        tip
      />
      {item.hashtags.map((hashtag, index) => (
        <Body
          hashtag={hashtag}
          key={index}
          icon={
            <HashtagIcon
              fill={COLORS.dark.text}
              width={SIZE.icon.xxs}
              height={SIZE.icon.xxs}
            />
          }
        />
      ))}
    </ScrollView>
  );
};

export default Hashtag;

const styles = StyleSheet.create({
  scrollview: {
    gap: SIZE.spacing.sm,
    marginBottom: SIZE.spacing.md,
  },
  container: {
    paddingHorizontal: SIZE.spacing.sm,
    borderWidth: 1,
    borderColor: COLORS.dark.border,
    borderRadius: SIZE.radius.full,
    gap: SIZE.spacing.sm,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.dark.background,
    paddingVertical: SIZE.spacing.none,
    height: 24,
  },
  hashtag: {
    fontSize: SIZE.text.sm,
    lineHeight: SIZE.text.md,
  },
  tip: {
    backgroundColor: COLORS.dark.warning,
    borderColor: COLORS.dark.warning,
    height: 24,
  },
});
