import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const Appointment = () => {
  return (
    <>
      <Link href="/">
        <View>
          <Text>Hello this is your appointmenst site</Text>
        </View>
      </Link>
    </>
  );
};

export default Appointment;
