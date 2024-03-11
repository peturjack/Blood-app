import React from "react";
import { Image, Text, View } from "react-native";
import Gradient from "../../components/colors/gradient";
import { Link } from "expo-router";


const NotEligible = () => {
  return (
    <Gradient>
      <View className=" h-[70%] items-center">
        <Image className="mr-5 mb-[10] w-[200px] h-[200px]" source={require('../../assets/white_confused_5.svg')}></Image>
        <View className="h-[30%] max-w-[100%] items-center">
          <Text className="text-white font-bold text-4xl">We're bloody sorry...</Text>
          <View className="max-w-[50%] mt-[20]">
            <Text className="text-white text-base text-center">Because of [INSERT REASON] it looks like you're not eligible to donate blood</Text>
          </View>
        </View>
      </View>
      <View className="items-center">
        <Text className="text-white text-base">Answered wrong on the test?</Text>
        <Link className="text-center" href={"/signUpTest"}>
          <Text className="text-white text-base underline">Change your answer</Text>
        </Link>
      </View>
    </Gradient>
  );
};

export default NotEligible;
