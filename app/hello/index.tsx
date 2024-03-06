import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const Hello = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Link href="/">
        <View>
          <Text className="text-7xl text-red-700">Hello</Text>
        </View>
      </Link>
    </View>
  );
};

export default Hello;
