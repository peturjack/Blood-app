import React from "react";
import { View, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { router } from "expo-router";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return (
    <View className="flex-1 justify-center items-center ">
      <Text
        className="text-violet-700 text-7xl"
        onPress={() => router.push("/hello")}
      >
        App hey
      </Text>
    </View>
  );
};

export default App;
