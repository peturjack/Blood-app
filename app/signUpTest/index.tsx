import React from "react";
import { ScrollView, Text, View } from "react-native";
import TestedButtons from "../../components/buttons/letsGetTestedButtons";
import PrimaryButton from "../../components/buttons/primaryButton";
import Gradient from "../../components/colors/gradient";

const SignUpTest = () => {
  return (
    <Gradient>
      <ScrollView contentContainerStyle={{ flex: 1, alignItems: "center" }}>
        <View className="h-[20%] mt-[10%] items-center">
          <Text className="text-4xl font-bold text-white">Let’s get tested!</Text>
          <Text className="mt-10 text-2xl text-white">Take the test below to see if you’re eligible for blood donation</Text>
        </View>
        <View className="h-[15%] flex-row justify-between w-[212px]">
          <Text className="absolute h-[54px] w-[370px] text-white self-center mb-[60%]">Do you weight more than 50KG?</Text>
          <TestedButtons title="Yes" />
          <TestedButtons title="No" />
        </View>
        <View className="h-[15%] flex-row justify-between w-[212px]">
          <Text className="absolute h-[54px] w-[370px] text-white self-center mb-[60%]">Do you weight more than 50KG?</Text>
          <TestedButtons title="Yes" />
          <TestedButtons title="No" />
        </View>
        <View className="h-[15%] flex-row justify-between w-[212px]">
          <Text className="absolute h-[54px] w-[370px] text-white self-center mb-[60%]">Do you weight more than 50KG?</Text>
          <TestedButtons title="Yes" />
          <TestedButtons title="No" />
        </View>
        <View className="h-[15%] flex-row justify-between w-[212px]">
          <Text className="absolute h-[54px] w-[370px] text-white self-center mb-[60%]">Do you weight more than 50KG?</Text>
          <TestedButtons title="Yes" />
          <TestedButtons title="No" />
        </View>
        <View className="h-[15%] flex-row justify-between w-[212px]">
          <Text className="absolute h-[54px] w-[370px] text-white self-center mb-[60%]">Do you weight more than 50KG?</Text>
          <TestedButtons title="Yes" />
          <TestedButtons title="No" />
        </View>
        <View className="h-[15%] flex-row justify-between w-[212px]">
          <Text className="absolute h-[54px] w-[370px] text-white self-center mb-[60%]">Do you weight more than 50KG?</Text>
          <TestedButtons title="Yes" />
          <TestedButtons title="No" />
        </View>
        <View className="h-[15%] flex-row justify-between w-[212px]">
          <Text className="absolute h-[54px] w-[370px] text-white self-center mb-[60%]">Do you weight more than 50KG?</Text>
          <TestedButtons title="Yes" />
          <TestedButtons title="No" />
        </View>
        <PrimaryButton isPrimary={false} route="/visit" title="Finish Test" />
      </ScrollView>
    </Gradient>
  );
};

export default SignUpTest;
