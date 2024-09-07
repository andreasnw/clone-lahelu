import Mute from "@/assets/icons/video/Mute";
import Play from "@/assets/icons/video/Play";
import Volume from "@/assets/icons/video/Volume";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { formatTime } from "@/utils";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import { Platform, StyleSheet } from "react-native";
import { Fragment } from "react/jsx-runtime";

import ThemedButton from "../ThemedButton";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";

type ControlsProps = {
  toggleMute: () => void;
  isMuted: boolean;
  togglePause: () => void;
  isPaused: boolean;
  durationMills: number;
  positionMillis: number;
  onSeek: (position: number) => void;
};

const Controls = ({
  toggleMute,
  isMuted,
  togglePause,
  isPaused,
  durationMills,
  positionMillis,
  onSeek,
}: ControlsProps) => {
  const [colors, setColors] = useState("transparent");
  const [isSeeking, setIsSeeking] = useState(false);

  const onSlidingStart = () => {
    setIsSeeking(true);
    setColors(COLORS.dark.primary);
  };

  const onValueChange = (value: number) => {
    if (value >= durationMills) {
      return onSeek(durationMills - 200);
    }

    if (value <= 0) {
      return onSeek(1);
    }

    onSeek(value);
  };

  const onSlidingComplete = (value: number) => {
    setIsSeeking(false);
    setColors("transparent");
    onValueChange(value);
  };

  return (
    <Fragment>
      <ThemedButton containerStyle={styles.volume} onPress={toggleMute}>
        {isMuted ? (
          <Mute
            width={SIZE.icon.xs}
            height={SIZE.icon.xs}
            stroke={COLORS.dark.icon}
          />
        ) : (
          <Volume
            width={SIZE.icon.xs}
            height={SIZE.icon.xs}
            stroke={COLORS.dark.icon}
          />
        )}
      </ThemedButton>
      <ThemedButton containerStyle={styles.pause} onPress={togglePause}>
        {isPaused && (
          <ThemedView style={styles.accent}>
            <Play
              width={SIZE.icon.md}
              height={SIZE.icon.md}
              stroke={COLORS.dark.text}
            />
          </ThemedView>
        )}
      </ThemedButton>

      {isSeeking && (
        <ThemedText style={styles.time} type={"title"}>
          {formatTime(positionMillis)} / {formatTime(durationMills)}
        </ThemedText>
      )}

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={durationMills}
        minimumTrackTintColor={COLORS.dark.primary}
        maximumTrackTintColor={"transparent"}
        thumbTintColor={colors}
        value={positionMillis}
        onSlidingStart={onSlidingStart}
        onValueChange={onValueChange}
        onSlidingComplete={onSlidingComplete}
        tapToSeek={false}
      />
    </Fragment>
  );
};

export default Controls;

const styles = StyleSheet.create({
  volume: {
    position: "absolute",
    bottom: SIZE.spacing.xl,
    right: SIZE.spacing.sm,
    backgroundColor: COLORS.dark.background,
    width: SIZE.icon.md,
    height: SIZE.icon.md,
    borderRadius: SIZE.radius.full,
    justifyContent: "center",
    alignItems: "center",
    padding: SIZE.spacing.none,
    paddingVertical: SIZE.spacing.none,
    zIndex: 999,
  },
  pause: {
    position: "absolute",
    top: SIZE.spacing.none,
    left: SIZE.spacing.none,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    padding: SIZE.spacing.none,
    paddingVertical: SIZE.spacing.none,
    zIndex: 100,
  },
  accent: {
    backgroundColor: COLORS.dark.black,
    borderRadius: SIZE.radius.full,
    padding: SIZE.spacing.sm,
    justifyContent: "center",
    alignItems: "center",
  },
  slider: {
    position: "absolute",
    width: SIZE.screen.screenWidth,
    left: SIZE.spacing.none,
    bottom: Platform.OS === "ios" ? -SIZE.spacing.lg : -SIZE.spacing.sm,
    zIndex: 100,
    backgroundColor: "transparent",
  },
  time: {
    position: "absolute",
    bottom: SIZE.spacing.xxl,
    alignSelf: "center",
    fontSize: SIZE.text.xl,
    zIndex: 100,
  },
});
