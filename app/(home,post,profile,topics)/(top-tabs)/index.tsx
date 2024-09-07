import { useGetFeed } from "@/api/feed";
import { ThemedView } from "@/components/common/ThemedView";
import Feed from "@/components/feed";
import { COLORS } from "@/constants/theme/colors";
import { StyleSheet } from "react-native";

const Home = () => {
  const {
    data: feed,
    isLoading: isGettingFeed,
    hasMore,
    fetchNextPage,
  } = useGetFeed();

  return (
    <ThemedView style={styles.container}>
      <Feed
        data={feed}
        isLoading={isGettingFeed}
        hasMore={hasMore}
        fetchNextPage={fetchNextPage}
      />
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.dark.background,
  },
  flatlist: {
    paddingTop: 96,
    flexGrow: 1,
    backgroundColor: COLORS.dark.background,
  },
});
