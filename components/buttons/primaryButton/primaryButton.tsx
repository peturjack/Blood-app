import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

type Props = {
  title: string;
  route: string;
};

const PrimaryButton = ({ title, route }: Props) => {
  return (
    <>
      <Pressable onPress={() => router.push(route)}>
        <View className="flex justify-center items-center rounded-full bg-red-700">
          <Text className="text-white">{title}</Text>
        </View>
      </Pressable>
    </>
  );
};

export default PrimaryButton;
