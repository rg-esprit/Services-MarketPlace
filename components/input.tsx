import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import Icons from "../constants/icons";

interface InputComponentProps {
  PlaceHolder: string;
  icon?: any;
  isPassword?: boolean;
}
import { Image } from "expo-image";

const InputComponent = ({
  PlaceHolder,
  icon,
  isPassword,
}: InputComponentProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [shown, setShown] = useState(false);
  const getIconColor = () => {
    if (isFocused) return "#7121DF";
    if (inputValue.length > 0) return "#212121";
    return "gray";
  };

  return (
    <View
      className={`h-[60px] px-5 rounded-xl flex-row items-center ${
        isFocused
          ? "bg-transparent-purple border border-primary"
          : "border border-gray-100 bg-gray-100"
      }`}
    >
      {icon && (
        <Image
          source={icon}
          style={{
            width: 16.67,
            height: 15,
            tintColor: getIconColor(),
            marginRight: 12,
          }}
          contentFit="contain"
        />
      )}

      <TextInput
        placeholder={PlaceHolder}
        className={`flex-1 text-bodyXl font-ursemibold ${
          inputValue.length > 0 ? "text-[#212121]" : "text-gray-500"
        }`}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setInputValue}
        value={inputValue}
        secureTextEntry={!shown && isPassword}
      />

      {isPassword && (
        <TouchableOpacity onPress={() => setShown(!shown)}>
          <Image
            source={shown ? Icons.Show : Icons.Hide}
            style={{ width: 20, height: 20, tintColor: getIconColor() }}
            contentFit="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputComponent;
