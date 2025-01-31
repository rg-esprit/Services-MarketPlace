import { View, Text } from "react-native";
import React, { useState } from "react";
import { Image } from "expo-image";
import Icons from "@/constants/icons";
import Avatar from "@/components/Avatar";
import InputField from "@/components/input";
import Primarybutton from "@/components/buttons/primarybutton";

const Setup = () => {
  const [ImageUri, setImageUri] = useState(
    require("../../assets/images/auth/Ellipse.svg")
  );
  return (
    <View className="h-full px-6 pt-6 pb-12 flex-col justify-between items-center inline-flex bg-white">
      <View className="flex-col justify-start items-start gap-6 flex">
        <View className="flex-col justify-start items-center gap-6 flex">
          <Avatar uri={ImageUri} overlayIconUri={Icons.Edit} size={140} />
          <InputField placeholder="Full Name" />
          <InputField placeholder="Nickname" />
          <InputField placeholder="Date of Birth" type="DOB" />
          <InputField placeholder="Email" type="Email-right" />
          <InputField placeholder="Phone Number" type="phone" />
          <InputField placeholder="Address" type="address" />
        </View>
      </View>
      <Primarybutton title="Continue" />
    </View>
  );
};

export default Setup;
