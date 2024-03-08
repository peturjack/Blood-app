import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import PrimaryButton from "../components/buttons/primaryButton";
import { Text } from "react-native";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return (
    <>
      <PrimaryButton isPrimary={true} route="/home/profile" title="Hello world" />
      <Text>Hello</Text>
    </>
  );
};

export default App;
