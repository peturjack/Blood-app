import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Image, Alert, Button } from "react-native";
import PrimaryButton from "../../components/buttons/primaryButton";
import Gradient from "../../components/colors/gradient";
import { createClient } from '@supabase/supabase-js';
import { router } from "expo-router";

const supabaseUrl = 'https://cjwhychqcklykfagvlua.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqd2h5Y2hxY2tseWtmYWd2bHVhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTgwMjkzNiwiZXhwIjoyMDI1Mzc4OTM2fQ.QhYg2ixin3LnM9rkdO0U7wZ4emHy4BT-PmIz5S3LTMU';
const supabase = createClient(supabaseUrl, supabaseKey);

const SecondVisit = () => {
  const [pin, setPin] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    userStatus();
    getName();
    console.log("userStatus: " + userStatus().toString);
    console.log("getName: " + getName().toString);
  }, []);

  const userStatus = async () => {
    // Test if user is logged in
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        if (session) {
          const currentUser = session.user;
          const userId = currentUser.id;
          console.log("user id:", userId);
        } else {
          console.log("Couldn't get user data.");
        }
      } else if (event === 'SIGNED_OUT') {
        // session closed
        console.log("User disconnected");
      }
    });

    //get user data
    const { data: { user } } = await supabase.auth.getUser();

    // Check if user is already logged in
    const currentUser = { user }.user?.id;
    if (currentUser) {
      const userId = { user }.user?.id;
      console.log("ID del usuario actual:", userId);
    } else {
      console.log("No hay usuario autenticado");
    }
  };

  const getName = async () => {
    try {
      // var userId = "7ab02517-2f63-4aef-8fdd-ef06c0e36fbf";
      var userId = userStatus();
      const { data, error } = await supabase
        .from('profiles')
        .select('name, pin')
        .eq('id', userId);

      if (error) {
        console.error("Error getting user data:", error.message);
      } else {
        if (data && data.length > 0) {
          setUserName(data[0].name);
          setPin(data[0].pin);
        } else {
          console.error("No user data found");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const checkPin = () => {
    const pinCode1Input = document.getElementById("pinCode1") as HTMLInputElement;
    const pinCode2Input = document.getElementById("pinCode2") as HTMLInputElement;
    const pinCode3Input = document.getElementById("pinCode3") as HTMLInputElement;
    const pinCode4Input = document.getElementById("pinCode4") as HTMLInputElement;

    const pinCode1 = pinCode1Input ? pinCode1Input.value : "";
    const pinCode2 = pinCode2Input ? pinCode2Input.value : "";
    const pinCode3 = pinCode3Input ? pinCode3Input.value : "";
    const pinCode4 = pinCode4Input ? pinCode4Input.value : "";

    const enteredPin = pinCode1 + pinCode2 + pinCode3 + pinCode4;

    console.error("Entered pin: " + enteredPin);
    console.error("Registered pin: " + pin);

    if (enteredPin == pin) {
      // window.location.href = "http://localhost:8081/";
      router.push("/");
    } else {
      // Incorrect pin, show error message
      Alert.alert("Error", "Incorrect pin. Please try again.");
    }
  };

  return (
    <>
      <Gradient>
        <View className="h-[100%]">
          <View className="h-[20%] mt-20 ">
            <Image
              source={require('../../assets/white_drop_2_2.svg')}
              className=" w-[200px] h-[200px] justify-right ml-20"
            />
            <Text className="text-white text-5xl font-thin mb-5 text-center">Welcome back</Text>
            <Text className="text-white text-4xl font-thin text-center">{userName ? userName : "User's name"}</Text>
          </View>
          <View className="h-[10%] mt-60 flex-row">
            <TextInput
              className="text-base bg-white border-white rounded-md p-2 h-[80px] w-[80px] mr-5 flex text-center"
              maxLength={1}
              keyboardType="numeric"
              id="pinCode1"
            />
            <TextInput
              className="text-base bg-white border-white rounded-md p-2 h-[80px] w-[80px] mr-5 text-center"
              maxLength={1}
              keyboardType="numeric"
              id="pinCode2"
            />
            <TextInput
              className="text-base bg-white border-white rounded-md p-2 h-[80px] w-[80px] mr-5 text-center"
              maxLength={1}
              keyboardType="numeric"
              id="pinCode3"
            />
            <TextInput
              className="text-base bg-white border-white rounded-md p-2 h-[80px] w-[80px] mr-5 text-center"
              maxLength={1}
              keyboardType="numeric"
              id="pinCode4"
            />
          </View>

          <View>
            <Link href="/signIn" className="mb-3">
              <Text className="text-white text-lg border-b-2 border-white">
                Not you? Change account
              </Text>
            </Link>
            {/* <Link href="/index">
              <Text className="text-white text-lg border-b-2 border-white">
                I forgot my password
              </Text>
            </Link> */}
          </View>
          <View className="mt-[25%]">
            {/* <Button title="Sign In" onPress={checkPin}></Button> */}
            <PrimaryButton title="Sign In" onPress={checkPin}></PrimaryButton>
          </View>
        </View>
      </Gradient>
    </>
  );
};

export default SecondVisit;
