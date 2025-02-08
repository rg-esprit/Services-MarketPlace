import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ServiceItem from "@/components/ServiceItem";

export default function AllServicesScreen() {
  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-row flex-wrap justify-between gap-6">
        <ServiceItem name="Cleaning" icon="home-outline" color="#7210ff" />
        <ServiceItem name="Repairing" icon="construct" color="#ff9800" />
        <ServiceItem name="Painting" icon="color-palette" color="#335ef7" />
        <ServiceItem name="Laundry" icon="shirt" color="#FFC107" />
        <ServiceItem name="Appliance" icon="cog" color="#f75555" />
        <ServiceItem name="Plumbing" icon="water" color="#4caf50" />
        <ServiceItem name="Shifting" icon="car" color="#00bcd4" />
        <ServiceItem name="Beauty" icon="heart" color="#7210ff" />
        <ServiceItem name="AC Repa.." icon="snow" color="#4caf50" />
        <ServiceItem name="Vehicle" icon="car" color="#335ef7" />
        <ServiceItem name="Electronics" icon="phone-portrait" color="#ff9800" />
        <ServiceItem name="Massage" icon="arrow-down" color="#f75555" />
        <ServiceItem name="Men’s Sal.." icon="man" color="#7210ff" />
      </View>
    </View>
  );
}
