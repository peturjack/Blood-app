import { Pressable, Text, View } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { Link } from "expo-router";
import { buttonProps } from "../../../utils/types";
import { useState } from "react";
import { bloodDonationTypes } from "../../../utils/constant";

const DonationButtons = ({ title }: buttonProps) => {
  const [isPrimaryColor, setIsPrimaryColor] = useState(
    bloodDonationTypes.map(() => false)
  );
  const toggleColor = (index: number) => {
    const newIsPrimaryColor = bloodDonationTypes.map(() => false);
    newIsPrimaryColor[index] = true;
    setIsPrimaryColor(newIsPrimaryColor);
  };

  return bloodDonationTypes.map((title, index) => (
    <Pressable
      key={index}
      onPress={() => toggleColor(index)}
      className={`flex justify-center items-center py-3 px-4 drop-shadow-sm border-2 border-blood rounded-full mt-5 ${
        isPrimaryColor[index] ? "bg-blood" : "bg-white"
      }`}
    >
      <View className="flex-row justify-between w-full">
        <View></View>
        <Text
          className={`${isPrimaryColor[index] ? "text-white" : "text-black"}`}
        >
          {title}
        </Text>
        <Foundation
          name="info"
          size={20}
          color={`${isPrimaryColor[index] ? "white" : "black"}`}
        />
      </View>
    </Pressable>
  ));
};

export default DonationButtons;
