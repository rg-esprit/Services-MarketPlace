import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";

interface AvatarProps {
  uri: string;
  size?: number;
  overlayColor?: string; // e.g. "#7210ff" or "#bdbdbd"
  overlayIconUri?: string; // e.g. "https://via.placeholder.com/10x10"
}

export default function Avatar({
  uri,
  size = 48,
  overlayColor,
  overlayIconUri,
}: AvatarProps) {
  return (
    <View style={{ width: size, height: size }} className="relative">
      <Image
        source={uri}
        style={{ width: size, height: size }}
        className="absolute rounded-full"
        contentFit="contain"
      />

      {overlayColor && !overlayIconUri && (
        <View
          style={{
            left: size * 0.75,
            top: size * 0.75,
            width: size * 0.25,
            height: size * 0.25,
          }}
          className="absolute rounded-full border-2 border-white"
        >
          <View
            style={{ backgroundColor: overlayColor }}
            className="flex-1 rounded-full"
          />
        </View>
      )}

      {overlayIconUri && (
        <View
          style={{
            left: size * 0.75,
            top: size * 0.75,
            width: size * 0.25,
            height: size * 0.25,
          }}
          className="absolute justify-center items-center bg-primary rounded-lg"
        >
          <Image
            source={overlayIconUri}
            style={{
              width: size * 0.2,
              height: size * 0.2,
              tintColor: "white",
            }}
            contentFit="contain"
          />
        </View>
      )}
    </View>
  );
}
