import { Pressable, Text, View } from "react-native";
import { buttonProps } from "../../../utils/types";


const PrimaryButton = ({ title, isPrimary, disabled, onPress }: buttonProps) => {
  return (
    <>
        <Pressable disabled={disabled} onPress={onPress} className="flex justify-center items-center">
          <View 
            className={`flex justify-center items-center rounded-full ${
              isPrimary ? "bg-blood" : "bg-white"
            } py-4 px-20` }
          >
            <Text className={` ${isPrimary ? "text-white" : "text-blood"}` }>
              {title} 
            </Text>
          </View>
        </Pressable>
    </>
  );
};

export default PrimaryButton;