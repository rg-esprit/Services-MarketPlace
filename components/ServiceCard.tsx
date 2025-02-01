import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ServiceCardProps {
  provider: string;
  service: string;
  price: string;
  rating: string;
  reviews: string;
  image: any;
}

export default function ServiceCard({
  provider,
  service,
  price,
  rating,
  reviews,
  image,
}: ServiceCardProps) {
  return (
    <View className="w-full p-5 bg-white rounded-[32px] shadow-sm flex-row items-center">
      <Image
        source={image}
        style={{ width: 120, height: 120, borderRadius: 20 }}
        className="w-[120px] h-[120px] rounded-[20px] mr-4"
      />
      <View className="flex-1">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-[#616161] text-xs font-medium">{provider}</Text>
          <Ionicons name="heart-outline" size={20} color="#616161" />
        </View>
        <Text className="text-[#212121] text-lg font-bold mb-1">{service}</Text>
        <Text className="text-[#7210ff] text-lg font-bold mb-2">{price}</Text>
        <View className="flex-row items-center gap-2">
          <Ionicons name="star" size={16} color="#FFD700" />
          <Text className="text-[#616161] text-xs font-medium">
            {rating} | {reviews}
          </Text>
        </View>
      </View>
    </View>
  );
}
