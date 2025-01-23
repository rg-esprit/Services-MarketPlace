import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-primary font-urbold text-heading5">
        Welcome to Services MarketPlace APP!
      </Text>
      <Link href="/Home">Go Home</Link>
      <Link href="/Sign-in">Sign-in</Link>
    </View>
  );
}
