import { PostInfo } from "@/api/feed";
import OptimizedFlatlist from "@/components/common/OptimizedFlatlist";
import { ThemedView } from "@/components/common/ThemedView";
import EmptyComponent from "@/components/feed/list/EmptyComponent";
import Footer from "@/components/feed/list/Footer";
import PromotionalBanner from "@/components/feed/list/PromotionalBanner";
import Post from "@/components/feed/post/Post";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { ScrollContext } from "@/context/ScrollContext";
import Constants from "expo-constants";
import { useContext, useRef, useState } from "react";
import { Animated, StyleSheet, ViewToken } from "react-native";

type FeedProps = {
  data: PostInfo[];
  isLoading: boolean;
  hasMore: boolean;
  fetchNextPage: () => void;
};

const Feed = ({ data, isLoading, hasMore, fetchNextPage }: FeedProps) => {
  const { scrollY } = useContext(ScrollContext);
  const [viewableItems, setViewableItems] = useState<string[]>([]);

  const onViewableItemsChanged = useRef<
    (arg: { viewableItems: ViewToken[] }) => void
  >(({ viewableItems }) => {
    setViewableItems(viewableItems.map((item) => item.item.postID));
  });

  const handleLoadMore = () => {
    if (hasMore && !isLoading) {
      fetchNextPage();
    }
  };

  return (
    <ThemedView style={styles.container}>
      <OptimizedFlatlist
        data={data}
        renderItem={({ item }) => (
          <Post item={item} viewableItems={viewableItems} />
        )}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        ListHeaderComponent={<PromotionalBanner />}
        onViewableItemsChanged={onViewableItemsChanged.current}
        ListEmptyComponent={<EmptyComponent isLoading={isLoading} />}
        keyExtractor={(item) => item.postID}
        onEndReached={handleLoadMore}
        contentContainerStyle={styles.flatlist}
        ListFooterComponent={
          <Footer isLoading={isLoading && data.length > 0} />
        }
      />
    </ThemedView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark.background,
  },
  flatlist: {
    paddingTop: SIZE.tabHeight.md + SIZE.tabHeight.sm + Constants.statusBarHeight,
    flexGrow: 1,
    backgroundColor: COLORS.dark.background,
  },
});
