<<<<<<< HEAD
=======
import React, { useState } from "react";
import { Text, View, ScrollView,TextInput } from "react-native";
import SettingsButtons from "../../../components/buttons/settingsButtons";
import PrimaryButton from "../../../components/buttons/primaryButton";
import { supabase } from "../../../lib/supabase";
import { router } from "expo-router";

const Settings = () => {

  const handleToggle = (newValue: boolean) => {
    console.log('Toggle value:', newValue);
  };

  const handleSignOut = () => {
    supabase.auth.signOut();
    router.push('/signIn');
  };

  return (
    <ScrollView>
      <View className="w-[100%] items-center justify-between">
        <View className="h-[117px] w-[100%] bg-[#F44E4E] items-center justify-center">
          <Text className="text-white font-bold text-[24px] mt-5">Settings</Text>
        </View>
        <View className="mt-5 h-[231px] w-[362px] border-2 border-[#F44E4E] rounded-xl">
          <Text className="font-bold text-[24px] left-10 top-[24px]">Access</Text>
          <View className="p-5 mt-[24px] pl-10">
            <View className="flex-row justify-between">
              <Text className="text-[20px]">Location</Text>
              <SettingsButtons onToggle={handleToggle}></SettingsButtons>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-[20px]">Camera</Text>
              <SettingsButtons onToggle={handleToggle}></SettingsButtons>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-[20px]">Photos</Text>
              <SettingsButtons onToggle={handleToggle}></SettingsButtons>
            </View>
          </View>
        </View>
        <View className="mt-5 h-[231px] w-[362px] border-2 border-[#F44E4E] rounded-xl">
          <Text className="font-bold text-[24px] left-10 top-[24px]">Notifications</Text>
          <View className="p-5 mt-[24px] pl-10">
            <View className="flex-row justify-between">
              <Text className="text-[20px]">Allow emails</Text>
              <SettingsButtons onToggle={handleToggle}></SettingsButtons>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-[20px]">Allow texts</Text>
              <SettingsButtons onToggle={handleToggle}></SettingsButtons>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-[20px]">Allow notifications</Text>
              <SettingsButtons onToggle={handleToggle}></SettingsButtons>
            </View>
          </View>
        </View>
        <View className="mt-5 h-[231px] w-[362px] border-2 border-[#F44E4E] rounded-xl">
          <Text className="font-bold text-[24px] left-10 top-[24px]">Password</Text>
          <View className="p-5 mt-[24px] pl-10">
            <View className="flex-row justify-between">
              <Text className="text-[20px]">Allow FaceID</Text>
              <SettingsButtons onToggle={handleToggle}></SettingsButtons>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-[20px]">Allow FingerID</Text>
              <SettingsButtons onToggle={handleToggle}></SettingsButtons>
            </View>
          </View>
        </View>
        <View className="mt-10 mb-10">
          <PrimaryButton title="Logout" isPrimary={true} onPress={handleSignOut} disabled={false} />
        </View>
      </View>
    </ScrollView>
  )
};

export default Settings;
>>>>>>> 1cdbf7693aa2ddde71f562d887c5aa940da40736
