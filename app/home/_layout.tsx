import { Slot, Stack } from "expo-router";
import Navigation from "../../components/navigation";
import { SafeAreaView } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const HomeLayout: React.FC = () => {
  return (
    <>
      <SafeAreaView className="flex-1 w-[100%]">
        <Slot />
        <Navigation />
      </SafeAreaView>
    </>
  );
};
