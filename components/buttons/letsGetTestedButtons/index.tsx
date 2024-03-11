import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { buttonProps } from "../../../utils/types";
import { Link } from "expo-router";

const TestedButtons = ({ title, route }: buttonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleChangeColor = () => {
    setIsActive(!isActive);
  };

  return (
    <Link href={`${route}`}>
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
    </Link>
  );
};

export default TestedButtons;
