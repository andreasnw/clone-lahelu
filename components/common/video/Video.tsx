import { PostInfo } from "@/api/feed";
import { ThemedView } from "@/components/common/ThemedView";
import Controls from "@/components/common/video/Controls";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import {
  AVPlaybackStatus,
  Video as ExpoVideo,
  ResizeMode,
  VideoReadyForDisplayEvent,
} from "expo-av";
import { useEffect, useRef, useState } from "react";
import { Platform, StyleSheet, ViewStyle } from "react-native";

type VideoProps = {
  item: PostInfo;
  isVisible: boolean;
  containerStyle?: ViewStyle | false;
};

const Video = ({ item, isVisible, containerStyle }: VideoProps) => {
  const apiUrl = process.env.EXPO_PUBLIC_BUCKET_URL;
  const videoRef = useRef<ExpoVideo>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [durationMills, setDurationMills] = useState(0);
  const [positionMillis, setPositionMillis] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      if (isVisible) {
        videoRef.current.playAsync();
        setIsPaused(false);
      } else {
        videoRef.current.pauseAsync();
        setIsPaused(true);
      }
    }
  }, [isVisible]);

  const onReadyForDisplay = (videoData: VideoReadyForDisplayEvent) => {
    if (Platform.OS !== "web") return;
    // @ts-expect-error -- fix web aspect ratio
    videoData.srcElement.style.position = "initial";
  };

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded && status.durationMillis) {
      setDurationMills(status.durationMillis);
      setPositionMillis(status.positionMillis);
    }
  };

  const onSeek = (value: number) => {
    if (videoRef.current) {
      videoRef.current.setPositionAsync(value);
      setPositionMillis(value);
    }
  };

  const toggleMute = async () => {
    await videoRef.current?.setIsMutedAsync(!isMuted);
    setIsMuted(!isMuted);
  };

  const togglePause = () => {
    if (isPaused) videoRef.current?.playAsync();
    else videoRef.current?.pauseAsync();

    setIsPaused(!isPaused);
  };

  if (!item) return null;
  return (
    <ThemedView style={[styles.container, containerStyle]}>
      <ExpoVideo
        ref={videoRef}
        style={[
          styles.container,
          containerStyle,
          { aspectRatio: item.mediaWidth / item.mediaHeight },
        ]}
        source={{
          uri: apiUrl + item.media,
        }}
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        shouldPlay={false}
        isMuted={true}
        onReadyForDisplay={onReadyForDisplay}
        onPlaybackStatusUpdate={onPlaybackStatusUpdate}
      />
      <Controls
        toggleMute={toggleMute}
        isMuted={isMuted}
        togglePause={togglePause}
        isPaused={isPaused}
        durationMills={durationMills}
        positionMillis={positionMillis}
        onSeek={onSeek}
      />
    </ThemedView>
  );
};

export default Video;

const styles = StyleSheet.create({
  container: {
    height: undefined,
    width: SIZE.screen.screenWidth,
    maxHeight: SIZE.screen.screenHeight * 0.6,
    backgroundColor: COLORS.dark.grey,
    alignItems: "center",
    zIndex: 100,
  },
});
