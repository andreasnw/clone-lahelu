import { PostInfo } from "@/api/feed";
import Video from "@/components/common/video/Video";
import { SIZE } from "@/constants/theme/size";
import { getScreenSize } from "@/utils";
import { Image, StyleSheet } from "react-native";

type MediaProps = {
  item: PostInfo;
  viewableItems: string[];
};

const bucketUrl = process.env.EXPO_PUBLIC_BUCKET_URL;

const Media = ({ item, viewableItems }: MediaProps) => {
  const isVisible = viewableItems.includes(item.postID);
  const screenSize = getScreenSize();

  if (item.mediaType === 1)
    return (
      <Video
        item={item}
        isVisible={isVisible}
        containerStyle={screenSize === "md" && styles.croppedWidth}
      />
    );

  return (
    <Image
      source={{ uri: bucketUrl + item.media }}
      style={[
        screenSize === "md" ? styles.croppedWidth : styles.image,
        { aspectRatio: item.mediaWidth / item.mediaHeight },
      ]}
    />
  );
};

export default Media;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: undefined,
  },
  croppedWidth: {
    marginHorizontal: SIZE.spacing.md,
    borderRadius: SIZE.radius.xs,
    width: SIZE.screen.screenWidth - SIZE.spacing.md * 2,
    height: undefined,
    alignSelf: "center",
  },
});
