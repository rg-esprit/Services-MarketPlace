import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text className="text-primary font-urbold text-heading5">
        Welcome to Services MarketPlace APP!
      </Text>
      <Link href="/(auth)/Letsyouin">Sign-in</Link>
    </View>
  );
}
