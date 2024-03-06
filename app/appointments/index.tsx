import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";

const Appointment = () => {
  return (
    <>
      <SafeAreaView>
        <TouchableOpacity
          className="flex justify-center items-center bg-red-700 rounded-full"
          onPress={() => router.push("/")}
        >
          <Text className="text-white px-4 py-3">Go back</Text>
        </TouchableOpacity>

        <Text>This is your appointment page</Text>
      </SafeAreaView>
    </>
  );
};

export default Appointment;
