import { Pressable, Text, View } from "react-native";
import { Link, router } from "expo-router";
import { buttonProps } from "../../../utils/types";

const PrimaryButton = ({ title, route, isPrimary }: buttonProps) => {
  return (
    <>
      <Link href={`${route}`}>
        <Pressable className="flex justify-center items-center">
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
      </Link>
    </>
  );
};

export default PrimaryButton;
