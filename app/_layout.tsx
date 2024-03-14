import { Slot } from "expo-router";

import { SafeAreaView } from "react-native";
import Navigation from "../components/navigation";

export default function HomeLayout() {
  return (
    <>
      <SafeAreaView className="flex-1 w-[100%] ">
        <Slot />
        <Navigation />
      </SafeAreaView>
    </>
  );
}
