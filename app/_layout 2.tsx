import { Slot } from "expo-router";

import { SafeAreaView } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <SafeAreaView className="flex-1 w-[85%] m-auto">
        <Slot />
      </SafeAreaView>
    </>
  );
}
