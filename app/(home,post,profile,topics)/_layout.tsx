import BottomTabNavigator from "@/navigation/navigators/BottomTabNavigator";
import StackNavigator from "@/navigation/navigators/StackNavigator";
import { getScreenSize } from "@/utils";

export default function TabLayout() {
  const screenSize = getScreenSize();

  if (screenSize === "md") return <StackNavigator />;
  return <BottomTabNavigator />;
}
