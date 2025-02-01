import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="HomeScreen"
        options={{ title: "Home Screen", headerShown: false }}
      />
      <Tabs.Screen name="about" options={{ title: "About" }} />
    </Tabs>
  );
}
