import React from "react";
import { Text, View } from "react-native";
import { settingsProps } from "../../utils/types";

const AppointmentCard = ({
  title,
  time,
  date,
  address,
  month,
}: settingsProps) => {
  return (
    <View className="flex flex-row justify-between items-center py-2 border-2 border-blood rounded-[20px] ">
      <View className="flex-row gap-5">
        <View className="flex justify-center items-center pl-5">
          <Text className="text-[16px] font-bold text-[#F44E4E]">{date}</Text>
          <Text className="text-[14px] font-bold text-[#F44E4E]">{month}</Text>
        </View>
        <View>
          <Text className="font-semibold text-xl">{title}</Text>
          <Text className="text-[#8B8B8B] text-[14px]">
            <View className="flex">
              <Text>{address}</Text>
              <Text>Las Palmas</Text>
              <Text>{time}</Text>
            </View>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default AppointmentCard;
