import React from "react";
import { Text, View } from "react-native";

const AppointmentCard = () => {
  return (
    <View className="flex flex-row justify-between items-center py-2 border-2 border-blood rounded-[20px] ">
      <View className="pl-4">
        <Text className="text-sm text-blood font-bold">25th</Text>
        <Text className="text-[14px] text-blood font-bold">Aug</Text>
      </View>
      <View className="">
        <Text className="font-semibold text-xl">Plasma Donation</Text>
        <Text className="text-[#8B8B8B]">Blood Street 47</Text>
        <Text className="text-[#8B8B8B]">Las Palmas</Text>
        <Text className="text-[#8B8B8B]">12:30</Text>
      </View>
      <View className="pr-24"></View>
    </View>
  );
};

export default AppointmentCard;
