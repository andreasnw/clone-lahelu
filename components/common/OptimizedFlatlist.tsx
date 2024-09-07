import { Animated, FlatListProps } from "react-native";

const ITEM_VISIBLE_PERCENT_THRESHOLD = 80;
const MAX_TO_RENDER_PER_BATCH = 5;
const INITIAL_NUM_TO_RENDER = 5;
const SCROLL_EVENT_THROTTLE = 16;
const WINDOW_SIZE = 5;

const OptimizedFlatlist = <T,>({
  data,
  onViewableItemsChanged,
  renderItem,
  keyExtractor,
  onEndReached,
  ...rest
}: FlatListProps<T>) => {
  return (
    <Animated.FlatList
      onEndReached={onEndReached}
      data={data as Animated.AnimatedProps<ArrayLike<T>>}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{
        itemVisiblePercentThreshold: ITEM_VISIBLE_PERCENT_THRESHOLD,
      }}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
      scrollEventThrottle={SCROLL_EVENT_THROTTLE}
      initialNumToRender={INITIAL_NUM_TO_RENDER}
      maxToRenderPerBatch={MAX_TO_RENDER_PER_BATCH}
      windowSize={WINDOW_SIZE}
      removeClippedSubviews={true}
      {...rest}
    />
  );
};

export default OptimizedFlatlist;
