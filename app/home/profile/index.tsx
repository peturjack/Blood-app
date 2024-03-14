import React, { useCallback, useMemo, useRef } from "react";
import {
  SafeAreaView,
  Text,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
import { Image } from "expo-image";

import BloodCircles from "../../../components/profilePage/circles";
import { Entypo, Ionicons } from "@expo/vector-icons";
import PrimaryButton from "../../../components/buttons/primaryButton";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFooter,
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import DonationButtons from "../../../components/buttons/bloodDonationButtons";
import { setStatusBarHidden } from "expo-status-bar";

const ProfilePage = () => {
  const profilePic = "../../../assets/profile-pic.png";
  // ref for the modal
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables for the snap points
  const snapPoints = useMemo(() => ["65%"], []);

  // function to handle the button press
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleClosePress = () => {
    bottomSheetModalRef.current?.dismiss();
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    ),
    []
  );

  return (
    <>
      <GestureHandlerRootView className="flex-1">
        <BottomSheetModalProvider>
          <View className=" p-8 rounded-b-2xl bg-blood flex justify-center items-center ">
            <View className="flex-row justify-center items-center gap-4  ">
              <View className=" rounded-full flex justify-center items-center">
                <Image className="w-24 h-24" source={require(profilePic)} />
              </View>
              <View className="flex justify-center">
                <Text className="text-white font-semibold text-3xl">
                  Joseph Gonzalez
                </Text>
                <Text className="max-w-[250px] text-white">
                  Here will be some filler text about the user. Medical info or
                  notes.
                </Text>
              </View>
            </View>
            <View className=" flex-row gap-10 pt-6">
              <View>
                <BloodCircles
                  bottomColor="text-white"
                  topColor="text-white"
                  borderColor="border-white"
                  top={"22"}
                  bottom="Years"
                />
              </View>
              <View>
                <BloodCircles
                  bottomColor="text-white"
                  topColor="text-white"
                  borderColor="border-white"
                  top={"A+"}
                  bottom="Type"
                />
              </View>
            </View>
          </View>

          <View className="flex-row gap-10 justify-center pt-10">
            <View>
              <BloodCircles
                borderColor="border-blood"
                topColor="text-blood"
                bottomColor="text-black"
                top={"18"}
                bottom="Lives"
              />
            </View>
            <View>
              <BloodCircles
                borderColor="border-blood"
                topColor="text-blood"
                bottomColor="text-black"
                top={<Entypo name="drop" size={44} color="#F23E50" />}
                bottom="3.5L"
              />
            </View>
          </View>

          <View className="flex justify-center max-w-[339px] m-auto pt-14">
            <View className="flex-row items-center">
              <Ionicons name="reload-circle" size={28} color="#8B8B8B" />
              <Text>Current location</Text>
            </View>

            <TouchableOpacity
              className="pb-32"
              onPress={handlePresentModalPress}
            >
              <PrimaryButton isPrimary={true} title="Book Appointment" />
            </TouchableOpacity>
          </View>

          <BottomSheetModal
            style={{}}
            handleIndicatorStyle={{ display: "none" }}
            backdropComponent={renderBackdrop}
            snapPoints={snapPoints}
            ref={bottomSheetModalRef}
            detached
          >
            <BottomSheetView className="">
              <View className="flex-row justify-between items-center px-4">
                <Text className="text-xl">What would you like to donate?</Text>
                <TouchableOpacity onPress={handleClosePress}>
                  <Ionicons name="close" size={34} color="black" />
                </TouchableOpacity>
              </View>

              <DonationButtons />
              <Text className="text-center mt-2">Duration 2.5-3 hours</Text>
              <View className="flex items-center ">
                <TouchableOpacity className="w-[266px] ">
                  <PrimaryButton isPrimary={true} title="Next" />
                </TouchableOpacity>
              </View>
            </BottomSheetView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </>
  );
};

export default ProfilePage;
