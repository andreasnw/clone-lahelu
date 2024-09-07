import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";

type InfoBannerType = { children: ReactNode; containerStyle?: ViewStyle };

const InfoBanner = ({ children, containerStyle }: InfoBannerType) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

export default InfoBanner;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.dark.border,
    padding: SIZE.spacing.md,
    borderRadius: SIZE.radius.sm,
  },
});
