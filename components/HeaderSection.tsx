import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Avatar from "./Avatar";

interface HeaderSectionProps {
  userName: string;
}

export default function HeaderSection({ userName }: HeaderSectionProps) {
  return (
    <View className="w-full flex-row items-center gap-4">
      <Avatar uri="https://via.placeholder.com/48x48" size={48} />
      <View className="flex-1">
        <Text className="text-[#757575] text-base font-normal">
          Good Morning 👋
        </Text>
        <Text className="text-[#212121] text-xl font-bold">{userName}</Text>
      </View>
      <Ionicons name="notifications-outline" size={24} color="black" />
      <Ionicons name="cart-outline" size={24} color="black" />
    </View>
  );
}
