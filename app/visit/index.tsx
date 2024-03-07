import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import PrimaryButton from "../../components/buttons/primaryButton";

const Visit = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={["#F44E4E", "#737373"]} style={styles.gradient}>
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

export default Visit;