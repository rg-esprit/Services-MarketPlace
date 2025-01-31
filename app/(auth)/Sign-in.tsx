import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Primarybutton from "@/components/buttons/primarybutton";
import Icons from "../../constants/icons";
import { Image } from "expo-image";
import InputField from "@/components/input";
import { Link } from "expo-router";

const facebookimg = require("../../assets/icons/facebook-icon.png");
const googleimg = require("../../assets/icons/google-icon.png");
const appleimg = require("../../assets/icons/apple-icon.png");

const Signin = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 px-6 py-12 justify-between  bg-white ">
      <Text className=" text-gray-900 text-5xl font-urbold leading-[58px]">
        Login to your{"\n"}Account
      </Text>

      <View className="gap-6">
        <InputField
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="Email"
        />

        <InputField
          type="password"
          value={password}
          onChange={setPassword}
          placeholder="Password"
        />

        <TouchableOpacity
          className="flex-row items-center justify-center"
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View className="w-6 h-6 rounded-lg border-2 border-[#7210ff] mr-3" />
          <Text className="text-[#212121] text-sm font-semibold">
            Remember me
          </Text>
        </TouchableOpacity>

        <Primarybutton title="Sign in" />

        <TouchableOpacity>
          <Text className="text-[#7210ff] text-base font-semibold text-center">
            Forgot the password?
          </Text>
        </TouchableOpacity>
      </View>

      <View className="gap-5">
        <View className="flex-row items-center justify-center p-2.5">
          <View className="h-[1px] w-24 bg-[#eeeeee]" />
          <Text className="mx-4 text-[#616161] text-lg font-semibold">
            or continue with
          </Text>
          <View className="h-[1px] w-24 bg-[#eeeeee]" />
        </View>

        <View className="flex-row justify-center items-center gap-5">
          {["facebook", "google", "apple"].map((provider) => (
            <TouchableOpacity
              key={provider}
              className="px-8 py-[18px] bg-white rounded-2xl border border-[#eeeeee]"
            >
              <View className="w-7 h-7">
                <Image
                  source={
                    provider === "facebook"
                      ? facebookimg
                      : provider === "google"
                      ? googleimg
                      : appleimg
                  }
                  contentFit="contain"
                  style={{ width: 24, height: 24 }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="flex-row justify-center items-center">
        <Text className="text-[#9e9e9e] text-sm">Don't have an account? </Text>
        <Link
          href="/(auth)/Sign-up"
          className="text-[#7210ff] text-sm font-semibold"
        >
          Sign up
        </Link>
      </View>
    </View>
  );
};

export default Signin;
