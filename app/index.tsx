import React from "react";
import { View, Text } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import PrimaryButton from "../components/buttons/primaryButton/PrimaryButton";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return (
    <>
      <PrimaryButton route="/appointments" title="Hello world" />
    </>
  );
};

export default App;
