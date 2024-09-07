import Home from "@/assets/icons/bottom-nav-bar/Home";
import Post from "@/assets/icons/bottom-nav-bar/Post";
import Profile from "@/assets/icons/bottom-nav-bar/Profile";
import Topics from "@/assets/icons/bottom-nav-bar/Topics";

import { BottomTabNavigatorEnum } from ".";

export const TAB_NAV = [
  {
    title: BottomTabNavigatorEnum.TOP_TABS,
    icon: Home,
  },
  {
    title: BottomTabNavigatorEnum.TOPICS,
    icon: Topics,
  },
  {
    title: BottomTabNavigatorEnum.POST,
    icon: Post,
  },
  {
    title: BottomTabNavigatorEnum.PROFILE,
    icon: Profile,
  },
  {
    title: BottomTabNavigatorEnum.INDEX,
    icon: Home,
  },
];
