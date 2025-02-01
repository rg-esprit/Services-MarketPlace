import { View, Text, ScrollView } from "react-native";
import HeaderSection from "../../components/HeaderSection";
import SearchBar from "../../components/SearchBar";
import ServiceItem from "../../components/ServiceItem";
import FilterChip from "../../components/FilterChip";
import ServiceCard from "../../components/ServiceCard";

// Main Screen Component
export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 bg-white max-w-[428px] self-center">
      <View className="p-6 flex-col items-center gap-6">
        <HeaderSection userName="Andrew Ainsley" />
        <SearchBar />

        {/* Services Grid */}
        <View className="w-full">
          <View className="w-full flex-row justify-between items-center mb-4">
            <Text className="text-[#212121] text-xl font-bold">Services</Text>
            <Text className="text-[#7210ff] text-base font-bold">See All</Text>
          </View>

          <View className="w-full flex-row justify-between mb-4">
            <ServiceItem
              name="Cleaning"
              icon="home-outline"
              color="bg-[#7210ff]/10"
            />
            <ServiceItem
              name="Repairing"
              icon="construct-outline"
              color="bg-[#ff9800]/10"
            />
            <ServiceItem
              name="Painting"
              icon="brush-outline"
              color="bg-[#335ef7]/10"
            />
            <ServiceItem
              name="Laundry"
              icon="shirt-outline"
              color="bg-yellow-400/10"
            />
          </View>

          <View className="w-full flex-row justify-between">
            <ServiceItem
              name="Appliance"
              icon="tv-outline"
              color="bg-[#f75555]/10"
            />
            <ServiceItem
              name="Plumbing"
              icon="water-outline"
              color="bg-[#4caf50]/10"
            />
            <ServiceItem
              name="Shifting"
              icon="car-outline"
              color="bg-[#00bcd4]/10"
            />
            <ServiceItem
              name="More"
              icon="ellipsis-horizontal"
              color="bg-[#7210ff]/10"
            />
          </View>
        </View>

        {/* Most Popular Services */}
        <View className="w-full mt-6">
          <View className="w-full flex-row justify-between items-center mb-4">
            <Text className="text-[#212121] text-xl font-bold">
              Most Popular Services
            </Text>
            <Text className="text-[#7210ff] text-base font-bold">See All</Text>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mb-4"
          >
            {[
              "All",
              "Cleaning",
              "Repairing",
              "Painting",
              "Laundry",
              "Appliance",
            ].map((filter) => (
              <FilterChip
                key={filter}
                label={filter}
                selected={filter === "All"}
              />
            ))}
          </ScrollView>

          <View className="w-full space-y-4">
            <ServiceCard
              provider="Kylee Danford"
              service="House Cleaning"
              price="$25"
              rating="4.8"
              reviews="8,289 reviews"
              image={require("../../assets/images/tabs/Example1.png")}
            />

            <ServiceCard
              provider="Alfonzo Schuessler"
              service="Floor Cleaning"
              price="$20"
              rating="4.9"
              reviews="6,182 reviews"
              image={require("../../assets/images/tabs/Example2.png")}
            />

            <ServiceCard
              provider="Sanjuanita Ordonez"
              service="Washing Clothes"
              price="$22"
              rating="4.7"
              reviews="7,938 reviews"
              image={require("../../assets/images/tabs/Example3.png")}
            />

            <ServiceCard
              provider="Freida Varnes"
              service="Bathroom Cleaning"
              price="$24"
              rating="4.9"
              reviews="6,182 reviews"
              image={require("../../assets/images/tabs/Example4.png")}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
