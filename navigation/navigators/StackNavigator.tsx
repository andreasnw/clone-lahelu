import { BottomTabNavigatorEnum } from "@/constants/navigation";
import { COLORS } from "@/constants/theme/colors";
import { Stack } from "expo-router";

const SCREEN_OPTIONS = {
  tabBarActiveTintColor: COLORS.dark.icon,
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    backgroundColor: COLORS.dark.background,
    borderTopColor: COLORS.dark.background,
  },
};

const StackNavigator = () => {
  return (
    <Stack screenOptions={SCREEN_OPTIONS}>
      <Stack.Screen name={BottomTabNavigatorEnum.INDEX} />
    </Stack>
  );
};

export default StackNavigator;
