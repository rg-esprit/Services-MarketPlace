// _layout.tsx
import { Tabs, useRouter } from "expo-router";
import { Image } from "expo-image";
import Icons from "@/constants/icons";
import { TouchableOpacity } from "react-native";

function BackButton() {
  const router = useRouter();
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Image
        source={Icons.ArrowLeftLightOutline}
        style={{ width: 36, height: 36, marginLeft: 24, marginRight: 16 }}
      />
    </TouchableOpacity>
  );
}

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        headerStyle: {
          backgroundColor: "#fff",
          shadowColor: "transparent",
        },
        // Change the active/inactive text color:
        tabBarActiveTintColor: "#7210ff",
        tabBarInactiveTintColor: "#9e9e9e",
        // Style the label with your font, size, and weight:
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: "Urbanist",
          // You can’t conditionally change the font weight from here,
          // but the active/inactive tint colors will update the text color.
        },
        // Set a container style similar to your Tailwind classes (h-12 = 48px, px-8 ≈32px)
        tabBarStyle: {
          height: 48,
          paddingHorizontal: 32,
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: "Home",
          // Add an icon if you want; the example below uses a local image.
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Icons.Home : Icons.HomeLight}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#7210ff" : "#9e9e9e",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookings"
        options={{
          tabBarLabel: "Bookings",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Icons.Bookmark : Icons.BookmarkLight}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#7210ff" : "#9e9e9e",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Icons.Message : Icons.MessageLight}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#7210ff" : "#9e9e9e",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? Icons.Profile : Icons.ProfileLight}
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "#7210ff" : "#9e9e9e",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="AllServicesScreen"
        options={{
          href: null,
          headerShown: true,
          title: "All Services",
          headerLeft: () => <BackButton />,
        }}
      />
    </Tabs>
  );
}
