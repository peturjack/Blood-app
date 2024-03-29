import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../../components/buttons/primaryButton";
import Gradient from "../../components/colors/gradient";
import { Link } from "expo-router";

const Visit = () => {
  return (
    <Gradient>
      <View className="flex h-[100%] items-centerx1">
        <Image source={require('../../assets/white_drop_2_2.svg')} className="absolute w-[50%] top-[15%] left-[20%]" />
        <Text className="absolute font-bold text-4xl text-white top-[30%]">Blood Buddy</Text>
        <View className="flex h-[90%] justify-end items-center">
          <Link href={"/signIn"}>
          <PrimaryButton isPrimary={false} route="/signUpTest" title="Sign In" />
          </Link>
          <Link href={"/signUpTest"}>
          <Text className="text-white mt-5">Don't have an account yet? Sign Up!</Text>
          </Link>
        </View>
      </View>
    </Gradient>
  );
};

export default Visit;