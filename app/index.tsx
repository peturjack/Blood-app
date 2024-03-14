import React from "react";
import { NativeWindStyleSheet } from "nativewind";
import PrimaryButton from "../components/buttons/primaryButton";
import { Text, View } from "react-native";
import DonationButtons from "../components/buttons/bloodDonationButtons";
import AppointmentCard from "../components/appointmentCard";
import { bloodDonationTypes } from "../utils/constant";
import TestedButtons from "../components/buttons/letsGetTestedButtons";
import Navigation from "../components/navigation";

NativeWindStyleSheet.setOutput({
  default: "native",
});

const App = () => {
  return (
    <>
      <PrimaryButton
        isPrimary={true}
        route="/home/profile"
        title="Hello world"
      />
      <Text>Hello</Text>
      <DonationButtons route="/" title="" />

      <AppointmentCard />

      <TestedButtons route="" isPrimary={true} title="yes" />
      <TestedButtons route="" isPrimary={false} title="No" />
      <Navigation />
    </>
  );
};

export default App;
