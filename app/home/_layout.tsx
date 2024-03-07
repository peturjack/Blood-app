import { Slot } from "expo-router";
import Navigation from "../../components/navigation";
import { SafeAreaView } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <SafeAreaView className="flex-1">
        <Slot />
        <Navigation />
      </SafeAreaView>
    </>
  );
}
