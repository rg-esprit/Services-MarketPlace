import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";

interface PrimaryButtonProps {
  title: string;
  icon?: any;
  handlePress?: () => void;
}

const Primarybutton = ({ title, icon, handlePress }: PrimaryButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-full flex flex-row justify-center items-center bg-primary px-4 py-4 rounded-2xl"
    >
      {icon && (
        <Image
          source={icon}
          style={{ width: 24, height: 24, marginRight: 10 }}
          contentFit="contain"
        />
      )}
      <Text className="text-bodyLg font-bold text-others-white">{title}</Text>
    </TouchableOpacity>
  );
};

export default Primarybutton;
