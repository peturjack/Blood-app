import React from "react";
import { View, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import { router } from "expo-router";
import ProfilePage from "./profile";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return (
    <>
      <ProfilePage />
    </>
  );
};

export default App;
