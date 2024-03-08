import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

type Props = {
  title: string;
  route: string;
  isPrimary: boolean;
};

const PrimaryButton = ({ title, route, isPrimary }: Props) => {
  return (
    <>
      <View className="flex justify-center items-center">
        <Pressable onPress={() => router.push(route)}>
          <View
            className={`flex justify-center items-center rounded-full ${
              isPrimary ? "bg-blood" : "bg-white"
            } py-4 px-20`}
          >
            <Text className={` ${isPrimary ? "text-white" : "text-blood"}`}>
              {title}
            </Text>
          </View>
        </Pressable>
      </View>
    </>
  );
};

export default PrimaryButton;
