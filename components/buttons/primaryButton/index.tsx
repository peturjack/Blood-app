import { Text, TouchableOpacity, View } from "react-native";
import { Link, router } from "expo-router";
import { buttonProps } from "../../../utils/types";

const PrimaryButton = ({ title, isPrimary }: buttonProps) => {
  return (
    <>
      <View
        className={`flex justify-center items-center rounded-full ${
          isPrimary ? "bg-blood" : "bg-white"
        } py-4 px-20`}
      >
        <Text
          className={` ${isPrimary ? "text-white" : "text-blood"} text-[18px]`}
        >
          {title}
        </Text>
      </View>
    </>
  );
};

export default PrimaryButton;
