import React from "react";
import { Image } from "expo-image";
import { Entypo, Foundation, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView, Text, View } from "react-native";

const Navigation = () => {
  return (
    <View className=" pt-5 relative top-0 left-0 right-0 mt-auto flex">
      <View className="z-10 absolute top-[-20px]  rounded-full bg-red-500 h-[95px] w-[95px] flex justify-center items-center self-center">
        <View className="bg-white rounded-full h-[75px] w-[75px] flex justify-center items-center">
          <Entypo name="home" size={50} color={"#EF4444"} />
        </View>
      </View>
      <View className="bg-red-500 flex-row justify-between items-center py-[6px]">
        <View className="ml-5">
          <Foundation name="info" size={44} color="white" />
        </View>
        <View></View>
        <View className="mr-5">
          <MaterialIcons name="settings" size={44} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Navigation;
