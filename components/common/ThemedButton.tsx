import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import { ThemedText } from "./ThemedText";

type Props = {
  text?: string;
  onPress: () => void;
  containerStyle?: ViewStyle | ViewStyle[] | undefined;
  textStyle?: TextStyle;
  children?: React.ReactNode;
};

const ThemedButton = ({
  text,
  onPress,
  containerStyle,
  textStyle,
  children,
}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyle]}
    >
      {children}

      {text && (
        <ThemedText type={"title"} style={[styles.text, textStyle]}>
          {text}
        </ThemedText>
      )}
    </TouchableOpacity>
  );
};

export default ThemedButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.dark.primary,
    padding: SIZE.spacing.lg,
    paddingVertical: SIZE.spacing.sm,
    borderRadius: SIZE.radius.full,
    alignSelf: "flex-start",
  },
  text: {
    color: COLORS.dark.text,
    textAlign: "center",
    fontSize: SIZE.text.md,
  },
});
