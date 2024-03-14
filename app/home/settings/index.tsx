import React from "react";
import { Text, View, ScrollView } from "react-native";
import Gradient from "../../../components/colors/gradient";
import SettingsButtons from "../../../components/buttons/settingsButtons";

const Settings = () => {

  const handleToggle = (newValue: boolean) => {
    console.log('Toggle value:', newValue);
  };

  return (
    <ScrollView>
      <View className="w-[100%] items-center justify-between">
        <View className="h-[117px] w-[100%] bg-[#F44E4E] items-center justify-center">
          <Text className="text-white font-bold text-[24px] mt-5">Settings</Text>
        </View>
        <View className="mt-5 h-[231px] w-[362px] border-2 border-[#F44E4E] rounded-xl">
          <Text>Access</Text>
        </View>
        <View className="mt-5 h-[231px] w-[362px] border-2 border-[#F44E4E] rounded-xl">
          <Text>Notifications</Text>
        </View>
        <View className="mt-5 h-[231px] w-[362px] border-2 border-[#F44E4E] rounded-xl">
          <Text>Password</Text>
        </View>
        <View className="mt-5 h-[231px] w-[362px] border-2 border-[#F44E4E] rounded-xl">
          <Text>User Info</Text>
          <SettingsButtons onToggle={handleToggle}></SettingsButtons>
        </View>
      </View>
    </ScrollView>
  )
};

export default Settings;
