import { Stack } from "expo-router";
import * as AppleColors from "@bacons/apple-colors";

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
        // @ts-expect-error
        headerLargeStyle: {
          backgroundColor: AppleColors.systemGroupedBackground, // Color of your background
        },

        title: "Hello",
      }}
    />
  );
}
