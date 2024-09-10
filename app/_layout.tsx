import { Stack } from "expo-router";
import { PlatformColor } from "react-native";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true,
        headerLargeTitle: true,
        headerBlurEffect: "prominent",
        headerShadowVisible: true,
        headerLargeTitleShadowVisible: false,
        headerStyle: {
          // Hack to ensure the collapsed small header shows the shadow / border.
          backgroundColor: "rgba(255,255,255,0.01)",
        },
        headerLargeStyle: {
          backgroundColor: PlatformColor("systemGroupedBackgroundColor"), // Color of your background
        },

        title: "Hello",
      }}
    />
  );
}
