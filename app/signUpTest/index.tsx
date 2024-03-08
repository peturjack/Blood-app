import React from "react";
import { Text, View } from "react-native";
import TestedButtons from "../../components/buttons/letsGetTestedButtons";
import PrimaryButton from "../../components/buttons/primaryButton";
import Gradient from "../../components/colors/gradient";

const SignUpTest = () => {
  return (
    <Gradient>
      <View className="flex h-[100%] items-center">
        <View className="h-[25%] mt-[10%] items-center">
          <Text className="text-4xl text-bold text-white ">Let’s get tested!</Text>
          <Text className="mt-10 text-2xl text-white">Take the test below to see if you’re eligible for blood donation</Text>
        </View>
        <View className="h-[50%] flex-row">
          <TestedButtons route="/notEligible" title="No" />
          <TestedButtons route="/notEligible" title="No" />
        </View>
        <PrimaryButton isPrimary={false} route="/visit" title="Finish Test" />
      </View>
    </Gradient>
  );
};

export default SignUpTest;
