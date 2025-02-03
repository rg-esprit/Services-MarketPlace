import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ServiceItemProps {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
}

export default function ServiceItem({ name, icon, color }: ServiceItemProps) {
  return (
    <TouchableOpacity className="items-center gap-3">
      <View
        style={{ backgroundColor: `${color}1A` }}
        className="p-4 rounded-full"
      >
        <Ionicons name={icon} size={28} color={color} />
      </View>
      <Text className="text-[#424242] text-base font-bold">{name}</Text>
    </TouchableOpacity>
  );
}
