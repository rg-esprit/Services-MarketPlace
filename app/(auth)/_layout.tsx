import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Image } from "expo-image";
import Icons from "@/constants/icons";

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
      <Tabs.Screen
        name="setup"
        options={{
          headerShown: true,
          title: "Fill Your Profile",

          headerLeft: () => (
            <Image
              source={Icons.ArrowLeftLightOutline}
              style={{ height: 19.25, width: 15.8, marginHorizontal: 16 }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default AuthLayout;
