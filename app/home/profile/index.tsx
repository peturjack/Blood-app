import React from "react";
import { SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import { router } from "expo-router";

const ProfilePage = () => {
  return (
    <>
      <SafeAreaView>
        <Text>This is your profile page</Text>
        <TouchableOpacity className="py-3 px-4 bg-red-700">
          <Button
            color="white"
            title="Book Appointments"
            onPress={() => router.push("/home/appointments")}
          ></Button>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

export default ProfilePage;
