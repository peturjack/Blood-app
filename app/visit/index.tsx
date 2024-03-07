import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const NotEligible = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LinearGradient
                colors={["#FE4A4A", "#E96C6C"]}
                start={[1, 0]}
                end={[0, 0.8]}
                style={styles.gradient}
            >
                <Text style={styles.title}>We’re bloody sorry...</Text>
                <Text>Because of [insert reason] it looks like you’re not eligible tto donate blood</Text>
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