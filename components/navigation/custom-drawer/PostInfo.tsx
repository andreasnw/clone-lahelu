import InfoBanner from "@/components/common/InfoBanner";
import ThemedButton from "@/components/common/ThemedButton";
import { ThemedText } from "@/components/common/ThemedText";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { StyleSheet, View } from "react-native";

const PostInfo = () => {
  const handleLogin = () => {
    // no-op
  };

  return (
    <InfoBanner containerStyle={styles.banner}>
      <View style={styles.info}>
        <ThemedText type={"title"} style={styles.title}>
          Mau ngepost meme kamu sendiri?
        </ThemedText>
        <ThemedText style={styles.subtitle}>
          Login dengan Google sekarang!
        </ThemedText>
        <ThemedButton
          text="Login"
          onPress={handleLogin}
          containerStyle={styles.button}
        />
      </View>
    </InfoBanner>
  );
};

export default PostInfo;

const styles = StyleSheet.create({
  banner: {
    margin: SIZE.spacing.md,
  },
  title: {
    textAlign: "center",
    color: COLORS.dark.text,
    fontSize: SIZE.text.md,
    lineHeight: 20,
  },
  subtitle: {
    textAlign: "center",
    color: COLORS.dark.text,
    fontSize: SIZE.text.xs,
    lineHeight: SIZE.text.xs + 2,
  },
  info: {
    gap: SIZE.spacing.sm,
  },
  button: {
    alignSelf: "center",
  },
});
