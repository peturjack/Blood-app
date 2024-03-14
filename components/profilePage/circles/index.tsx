import React from "react";
import { View, Text } from "react-native";
import { profileProp } from "../../../utils/types";

const BloodCircles = ({
  top,
  bottom,
  topColor,
  bottomColor,
  borderColor,
}: profileProp) => {
  return (
    <View
      className={`h-32 w-32 rounded-full border-2 ${borderColor} flex justify-center items-center`}
    >
      <Text className={`font-bold text-[44px] ${topColor}`}>{top}</Text>
      <Text className={`text-[32px] ${bottomColor}`}>{bottom}</Text>
    </View>
  );
};

export default BloodCircles;
