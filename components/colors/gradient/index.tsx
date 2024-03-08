import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView, StyleSheet, View } from 'react-native';

interface GradientProps {
  children: ReactNode;
}

const Gradient = ({ children }: GradientProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#FE4A4A', '#E96C6C']} start={[1, 0]} end={[0, 0.8]} style={styles.gradient}>
        <View style={styles.content}>{children}</View>
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
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Gradient;
