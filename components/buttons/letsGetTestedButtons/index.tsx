import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";

type Props = {
  title: string;
  route?: string;
};

const TestedButtons = ({ title, route }: Props) => {
  const [isActive, setIsActive] = useState(false);

  const handleChangeColor = () => {
    setIsActive(!isActive);
  };

  return (
    <View>
      <Pressable
        onPress={handleChangeColor}
        style={{
          backgroundColor: isActive ? "white" : "transparent",
          width: 94,
          height: 40,
          borderWidth: 2,
          borderColor: "white",
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: isActive ? "#F23E50" : "white",
          }}
        >
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

export default TestedButtons;
