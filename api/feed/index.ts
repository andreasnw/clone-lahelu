import useInfiniteQuery from "@/hooks/useInfiniteQuery";

export type PostInfo = {
  postID: string;
  userID: string;
  title: string;
  totalUpvotes: number;
  totalDownvotes: number;
  totalComments: number;
  createTime: number;
  feed: number;
  searchVector: string;
  mediaWidth: number;
  mediaHeight: number;
  media: string;
  mediaThumbnail: string | null;
  sensitive: boolean;
  mediaType: 0 | 1; // 0: image, 1: video
  pinCommentID: string | null;
  hashtags: string[];
  totalCoins: number;
  ageTime: number;
  bindTopicID: string | null;
  userUsername: string;
  userAvatar: string;
  userFrame: string | null;
  userPrivilege: number;
  userPlusTime: number;
};

const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const useGetFeed = () => {
  return useInfiniteQuery<PostInfo>(`${apiUrl}get-posts`);
};
