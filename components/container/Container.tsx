import React, { ReactNode } from "react";
import { Text } from "react-native";
type containerProps = {
  children: ReactNode;
};

const Container = (props: containerProps) => {
  return <Text>Container</Text>;
};

export default Container;
