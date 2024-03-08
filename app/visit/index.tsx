import React from "react";
import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../../components/buttons/primaryButton";


const NotEligible = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#FE4A4A", "#E96C6C"]} start={[1, 0]} end={[0, 0.8]} style={styles.gradient} >
        <View className="flex h-[100%] items-center">
          <Image source={require('../../assets/white_drop_2_2.svg')} className="absolute w-[50%] top-[15%] left-[20%]" />
          <Text className="absolute font-bold text-4xl text-white top-[30%]">Blood Buddy</Text>
          <View className="flex h-[90%] justify-end items-center">
            <PrimaryButton route="/" title="Sign In" />
            <Text className="text-white mt-5">Don't have an account yet? Sign Up!</Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default NotEligible;