import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const AuthLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          display: "none",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen name="Letsyouin" options={{ headerShown: false }} />
      <Tabs.Screen name="Sign-in" />
      <Tabs.Screen name="Sign-up" />
    </Tabs>
  );
};

export default AuthLayout;
