import { Link } from "expo-router";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

const SignIn = () => {
  return (
    <>
      <SafeAreaView>
        <View className="flex-1 justify-center items-center">
          <Link href="/">
            <View>
              <Text className="text-7xl text-red-700">
                This is your sign in page
              </Text>
            </View>
          </Link>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignIn;
