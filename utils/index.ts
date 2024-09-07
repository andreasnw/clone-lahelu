import { SIZE } from "@/constants/theme/size";
import { Animated } from "react-native";
import { Dimensions } from "react-native";

type AnimateHeaderPayload = {
  scrollY: Animated.Value;
  size: number;
};

export const animateHeader = ({ scrollY, size }: AnimateHeaderPayload) => {
  const diffclamp = Animated.diffClamp(scrollY, 0, size);
  const translateY = diffclamp.interpolate({
    inputRange: [0, 100],
    outputRange: [0, -size],
    extrapolate: "clamp",
  });

  const opacity = diffclamp.interpolate({
    inputRange: [0, size],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return { translateY, opacity };
};

export const compareDate = (
  date1: Date,
  date2: Date,
  type: "minutes" | "hours" | "days"
): number => {
  const diffs = {
    minutes: 1000 * 60,
    hours: 1000 * 60 * 60,
    days: 1000 * 60 * 60 * 24,
  };

  const diffMs = Math.abs(date1.getTime() - date2.getTime());
  return Math.floor(diffMs / diffs[type]);
};

export const getSmallestDifference = (date1: Date, date2: Date): string => {
  const minutes = compareDate(date1, date2, "minutes");
  const hours = compareDate(date1, date2, "hours");
  const days = compareDate(date1, date2, "days");

  if (days > 0) return `${days} hari`;
  if (hours > 0) return `${hours} jam`;
  return `${minutes} menit`;
};

const TABLET_MIN_WIDTH = 600;
const TABLET_MIN_HEIGHT = 600;

export const getScreenSize = () => {
  if (
    SIZE.screen.screenWidth >= TABLET_MIN_WIDTH &&
    SIZE.screen.screenHeight >= TABLET_MIN_HEIGHT
  ) {
    return "md";
  }

  return "sm";
};

export const formatTime = (timeInMillis: number) => {
  if (!isNaN(timeInMillis)) {
    const totalSeconds = Math.floor(timeInMillis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }

  return "00:00";
};
