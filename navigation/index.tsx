import { NavigationIndex } from "@/constants/navigation";
import { Stack } from "expo-router";

export default function Navigation() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={NavigationIndex.TABS} />
      <Stack.Screen name={NavigationIndex.NOT_FOUND} />
    </Stack>
  );
}
