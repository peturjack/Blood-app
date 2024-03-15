import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import PrimaryButton from "../../../components/buttons/primaryButton";
import AppointmentCard from "../../../components/appointmentCard";

const Appointment = () => {
  return (
    <>
      <ScrollView className="flex-1 ">
        <View className="h-[117px] bg-blood flex justify-center items-center ">
          <Text className="text-xl text-white font-bold ">My Appointments</Text>
        </View>
        <View className="max-w-[361px] m-auto flex-1">
          <Text className="text-[24px] font-bold text-[#5B5656] mb-[30px] mt-[38px]">
            Upcoming Appointments
          </Text>
          <View className="mb-[67px]">
            <AppointmentCard
              title="Plasma Donation"
              time="12.30"
              month="Aug"
              date="25th"
              address="Blood Street 47 "
            />
          </View>
          <Text className="text-[24px] font-bold text-[#5B5656] mb-[30px]">
            Past Appointments
          </Text>
          <View className="flex gap-y-6">
            <View>
              <AppointmentCard
                title="Whole Blood Donation "
                time="13.10"
                month="July"
                date="3rd"
                address="Blood Street 47 "
              />
            </View>
            <View>
              <AppointmentCard
                title="Power Red Donation"
                time="9.45"
                month="June"
                date="17th"
                address="Blood Street 47 "
              />
            </View>
            <View>
              <AppointmentCard
                title="Platelet Donation"
                time="16.50"
                month="May"
                date="1st"
                address="Blood Street 47 "
              />
            </View>
            <View className="mb-32">
              <AppointmentCard
                title="Plasma Donation"
                time="20.20"
                month="April"
                date="12th"
                address="Blood Street 47 "
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Appointment;
