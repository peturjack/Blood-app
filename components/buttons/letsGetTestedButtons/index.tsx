import { router } from "expo-router";
import React, { useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  route?: string;
};

const TestedButtons = ({ title, route }: Props) => {
  const [isActive, setIsActive] = useState(false);
  //const myRoute = () => router.push(route || "");
  const handleChangeColor = () => {
    setIsActive(!isActive);
    // myRoute();
  };

  return (
    <View>
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
    </View>
  );
};

export default TestedButtons;
