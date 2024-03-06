import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import PrimaryButton from "../../components/buttons/primaryButton/PrimaryButton";

const Appointment = () => {
  return (
    <>
      <PrimaryButton route="/" title="Go back" />
      <SafeAreaView>
        <Text>This is your appointment page</Text>
      </SafeAreaView>
    </>
  );
};

export default Appointment;
