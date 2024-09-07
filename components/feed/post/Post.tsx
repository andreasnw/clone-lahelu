import { PostInfo } from "@/api/feed";

import { ThemedView } from "../../common/ThemedView";
import Details from "./Details";
import Header from "./Header";
import Media from "./Media";

type PostProps = {
  item: PostInfo;
  viewableItems: string[];
};

const Post = ({ item, viewableItems }: PostProps) => {
  return (
    <ThemedView>
      <Header item={item} />
      <Media item={item} viewableItems={viewableItems} />
      <Details item={item} />
    </ThemedView>
  );
};

export default Post;
