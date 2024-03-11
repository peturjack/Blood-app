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
        <View className="flex-col items-center p-0 mb-20 max-w-[100%]">
          <Text className="text-white mb-5">Are you in good health?</Text>
          <View className="flex-row justify-between w-[212px]">
            <TestedButtons title="Yes" />
            <TestedButtons title="No" />
          </View>
        </View>
        <View className="flex-col items-center p-0 mb-20 max-w-[100%]">
          <Text className="text-white mb-5">Is your weight above 50 KG?</Text>
          <View className="flex-row justify-between w-[212px]">
            <TestedButtons title="Yes" />
            <TestedButtons title="No" />
          </View>
        </View>
        <View className="flex-col items-center p-0 mb-20 max-w-[80%]">
          <Text className="text-white mb-5">Do you suffer from type 1 or 2 diabetes?</Text>
          <View className="flex-row justify-between w-[212px]">
            <TestedButtons title="Yes" />
            <TestedButtons title="No" />
          </View>
        </View>
        <View className="flex-col items-center p-0 mb-20 max-w-[80%]">
          <Text className="text-white mb-5">Have you gotten any tatto in the last 4 months?</Text>
          <View className="flex-row justify-between w-[212px]">
            <TestedButtons title="Yes" />
            <TestedButtons title="No" />
          </View>
        </View>
        <View className="flex-col items-center p-0 mb-20 max-w-[80%]">
          <Text className="text-white mb-5">Are you in medical treatment or are you using any medicine?</Text>
          <View className="flex-row justify-between w-[212px]">
            <TestedButtons title="Yes" />
            <TestedButtons title="No" />
          </View>
        </View>
        <View className="flex-col items-center p-0 mb-20 max-w-[80%]">
          <Text className="text-white mb-5">Are you currently pregnant or have been in the last 6 months?</Text>
          <View className="flex-row justify-between w-[212px]">
            <TestedButtons title="Yes" />
            <TestedButtons title="No" />
          </View>
        </View>
        <View className="flex-col items-center p-0 mb-20 max-w-[80%]">
          <Text className="text-white mb-5">Have you been diagnosticated of Covid 19 in the past 28 days?</Text>
          <View className="flex-row justify-between w-[212px]">
            <TestedButtons title="Yes" />
            <TestedButtons title="No" />
          </View>
        </View>
        <View className="flex-col items-center p-0 mb-20 max-w-[80%]">
          <Text className="text-white mb-5">Have you been in the UK for 12 months (not consecutive necessary) between 1980 and 1996?</Text>
          <View className="flex-row justify-between w-[212px]">
            <TestedButtons title="Yes" />
            <TestedButtons title="No" />
          </View>
        </View>
        <View className="h-[10%]">
          <PrimaryButton isPrimary={false} route="/notEligible" title="Finish Test" />
        </View>
      </ScrollView>
    </Gradient>
  );
};

export default SignUpTest;
