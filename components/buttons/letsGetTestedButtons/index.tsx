import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { buttonProps } from "../../../utils/types";

const TestedButtons = ({ title }: buttonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleChangeColor = () => {
    setIsActive(!isActive);
  };

  return (
    <Pressable
      onPress={handleChangeColor}
      className={`${
        isActive ? "bg-white" : "bg-transparent"
      } w-[94px] h-[40px] border-2 border-white rounded-full flex justify-center items-center`}
    >
      <Text
        className={`${
          isActive ? "text-blood" : "text-white"
        } text-[14px] font-bold`}
      >
        {title}
      </Text>
    </Pressable>
  );
};

export default TestedButtons;
