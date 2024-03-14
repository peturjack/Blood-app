import { Slot, Stack } from "expo-router";
import Navigation from "../../components/navigation";
import { SafeAreaView } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

const HomeLayout: React.FC = () => {
  return (
    <BottomSheetModalProvider>
      <SafeAreaView className="flex-1 w-[100%]">
        <Slot />
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};
