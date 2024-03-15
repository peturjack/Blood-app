import { Image } from "expo-image";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const AboutPage = () => {
  const myImage = "../../../assets/some-doctors.png";
  return (
    <>
      <ScrollView className="flex-1">
        <View className="h-[117px] bg-blood flex justify-center items-center ">
          <Text className="text-xl text-white font-bold ">About</Text>
        </View>
        <View className="max-w-[349px] m-auto flex-1">
          <View className=" flex gap-2">
            <Text className="font-semibold text-xl pt-[33px]">
              The Importance of Blood Donation
            </Text>
            <Text className="text-[16px]">
              In today's fast-paced world, the need for blood donations has
              never been more critical. Blood is a lifeline for those facing
              medical emergencies, surgeries, and various health conditions.
              Through the selfless act of blood donation, individuals can
              contribute to saving lives and making a significant impact on
              their communities.
            </Text>
          </View>
          <View className="flex justify-center items-center">
            <Image
              className="h-[177px] w-[250px] my-2"
              source={require(myImage)}
            />
          </View>
          <Text className="font-semibold text-xl">
            Addressing the Constant Need
          </Text>
          <Text className="text-[16px] mb-[32px]">
            Hospitals and healthcare facilities across the globe face a constant
            demand for blood to treat patients with various medical conditions.
            From accident victims to individuals undergoing major surgeries or
            those with chronic illnesses, a stable and readily available blood
            supply is essential. Regular blood donations are crucial to ensuring
            that blood banks are well-stocked and prepared to meet the
            unpredictable and urgent needs of patients.
          </Text>
          <Text className="font-semibold text-xl">
            The Life-Saving Potential of a Single Donation
          </Text>
          <Text className="text-[16px] mb-20">
            Hospitals and healthcare facilities across the globe face a constant
            demand for blood to treat patients with various medical conditions.
            From accident victims to individuals undergoing major surgeries or
            those with chronic illnesses, a stable and readily available blood
            supply is essential. Regular blood donations are crucial to ensuring
            that blood banks are well-stocked and prepared to meet the
            unpredictable and urgent needs of patients.
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default AboutPage;
