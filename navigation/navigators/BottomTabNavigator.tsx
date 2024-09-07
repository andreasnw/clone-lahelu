import { BottomTabNavigatorEnum } from "@/constants/navigation";
import { TAB_NAV } from "@/constants/navigation/tab";
import { COLORS } from "@/constants/theme/colors";
import { SIZE } from "@/constants/theme/size";
import { Tabs } from "expo-router";

const HiddenIndex = () => null;

const BottomTabNavigator = () => {
  return (
    <Tabs
      screenOptions={({ route }) => {
        return {
          tabBarActiveTintColor: COLORS.dark.icon,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            backgroundColor: COLORS.dark.background,
            borderTopColor: COLORS.dark.background,
          },
          tabBarButton:
            route.name === BottomTabNavigatorEnum.INDEX
              ? HiddenIndex
              : undefined,
        };
      }}
    >
      {TAB_NAV.map((item) => {
        const Icon = item.icon;
        return (
          <Tabs.Screen
            key={item.title}
            name={item.title}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <Icon
                    color={focused ? COLORS.dark.primary : COLORS.dark.icon}
                    stroke={focused ? COLORS.dark.primary : COLORS.dark.icon}
                    width={SIZE.icon.sm}
                    height={SIZE.icon.sm}
                  />
                );
              },
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default BottomTabNavigator;
