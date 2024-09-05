import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
    screenOptions={{
      headerTitleAlign: "center", 
    }}
  >
    {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
    <Stack.Screen name="index" options={{ title: "A la Pistache",  }} />
    <Stack.Screen name="products" options={{ title: "Menu Pistachio" }} />
  </Stack>

  );
}
