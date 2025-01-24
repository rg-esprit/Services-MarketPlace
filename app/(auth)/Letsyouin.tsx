import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
const letsyouinimg = require("../../assets/images/sign/letsyouin.png");
const facebookimg = require("../../assets/icons/facebook-icon.png");
const googleimg = require("../../assets/icons/google-icon.png");
const appleimg = require("../../assets/icons/apple-icon.png");

interface ContinueWithProps {
  title: string;
  img: any;
}

const ContinueWith = ({ title, img }: ContinueWithProps) => {
  return (
    <View className="flex flex-row justify-center items-center border border-gray-300 rounded-2xl h-16 w-96">
      <View className="flex flex-row">
        <Image
          source={img}
          style={{ width: 24, height: 24, marginRight: 10 }}
          contentFit="contain"
        />
        <Text className="font-semibold text-bodyLg text-gray-900">
          Continue with {title}
        </Text>
        <View className="flex flex-col justify-center items-center"></View>
      </View>
    </View>
  );
};

const Letsyouin = () => {
  return (
    <View className="flex flex-col justify-center items-center px-6 py-12">
      <Image
        source={letsyouinimg}
        style={{ width: 380, height: 200 }}
        contentFit="contain"
      />
      <Text className="font-urbold text-heading1 text-gray-900">
        Let’s you in
      </Text>
      <View className="flex flex-col justify-center items-center">
        <View className="grid grid-rows-3 gap-4">
          <ContinueWith title="Facebook" img={facebookimg} />
          <ContinueWith title="Google" img={googleimg} />
          <ContinueWith title="Apple" img={appleimg} />
        </View>
        <View className="flex-row items-center my-4">
          <View className="flex-1 h-[1px] bg-gray-300" />
          <Text className="mx-4 text-gray-700 font-ursemibold text-bodyXl">
            or
          </Text>
          <View className="flex-1 h-[1px] bg-gray-300" />
        </View>
      </View>
    </View>
  );
};

export default Letsyouin;
