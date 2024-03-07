import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";

type Props = {
  title: string;
  route: string;
};

const PrimaryButton = ({ title, route }: Props) => {
  return (
    <>
      <View className="flex justify-center items-center">
        <TouchableOpacity onPress={() => router.push(route)}>
          <View className="flex justify-center items-center rounded-full bg-red-700 py-4 px-20 ">
            <Text className="text-white">{title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PrimaryButton;
