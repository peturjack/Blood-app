import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { buttonProps } from "../../../utils/types";
import { Link } from "expo-router";

const TestedButtons = ({ title }: buttonProps) => {
  const [isActive, setIsActive] = useState(false);
  //const myRoute = () => router.push(route || "");
  const handleChangeColor = () => {
    setIsActive(!isActive);
    // myRoute();
  };

  return (
    <Pressable
      onPress={handleChangeColor}
      className={` ${
        isActive ? "bg-transparent" : "bg-white"
      } w-[94px] py-2 border-white border-2 rounded-full flex justify-center items-center`}
    >
      <Text
        className={`text-sm font-bold ${
          isActive ? "text-white" : "text-[#F23E50]"
        }`}
      >
        {isActive ? title : "yes"}
      </Text>
    </Pressable>
  );
};

export default TestedButtons;
