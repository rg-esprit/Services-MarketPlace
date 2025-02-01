import { Text, TouchableOpacity } from "react-native";

interface FilterChipProps {
  label: string;
  selected?: boolean;
}

export default function FilterChip({
  label,
  selected = false,
}: FilterChipProps) {
  return (
    <TouchableOpacity
      className={`px-5 py-2 rounded-full mr-2 ${
        selected ? "bg-[#7210ff]" : "border-2 border-[#7210ff]"
      }`}
    >
      <Text
        className={`text-base font-semibold ${
          selected ? "text-white" : "text-[#7210ff]"
        }`}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
