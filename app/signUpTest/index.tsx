import React from "react";
import { SafeAreaView, Text } from "react-native";
import TestedButtons from "../../components/buttons/letsGetTestedButtons";
import PrimaryButton from "../../components/buttons/primaryButton";

const SignUpTest = () => {
  return (
    <>
      <SafeAreaView>
        <TestedButtons route="/notEligible" title="No" />
        <Text>This is where your sign up test will take place</Text>
        <PrimaryButton isPrimary={true} route="/signUpTest" title="Sign In" />
      </SafeAreaView>
    </>
  );
};

export default SignUpTest;
