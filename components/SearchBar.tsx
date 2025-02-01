import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View className="w-full h-14 px-5 bg-neutral-100 rounded-xl flex-row items-center gap-3">
      <Ionicons name="search" size={20} color="#bdbdbd" />
      <TextInput
        placeholder="Search"
        placeholderTextColor="#bdbdbd"
        className="flex-1 text-sm font-normal"
      />
      <Ionicons name="options-outline" size={20} color="#bdbdbd" />
    </View>
  );
}
