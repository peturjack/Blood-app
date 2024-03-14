import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, Image, Button } from "react-native";//While not testing comment Button here and uncomment the import below 
import Gradient from "../../components/colors/gradient";
// import Button from "../../components/buttons/primaryButton"; 
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lathnvpabbkjsfejvsmb.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxhdGhudnBhYmJranNmZWp2c21iIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTY0MTEyMywiZXhwIjoyMDI1MjE3MTIzfQ.b2b2QuL-JDnnx-mU8fioyL9tkC6ScH8mtatqmIVg838';
const supabase = createClient(supabaseUrl, supabaseKey);

const SignIn = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [identifierError, setIdentifierError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSignIn = async () => {
    if (!validateIdentifier() || !validatePassword()) {
      console.log("");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: identifier,
        password: password,
      })

      if (error) {
        console.error('Error al iniciar sesión:', error.message);
      } else {
        console.log('Inicio de sesión exitoso:', identifier);
      }
    } catch {
      console.error('Error al iniciar sesión:',);
    }
  };

  const validateIdentifier = () => {
    if (!identifier) {
      setIdentifierError("Email or SSC is required");
      return false;
    } else {
      setIdentifierError("");
      return true;
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    } else {
      setPasswordError("");
      return true;
    }
  };

  return (
    <>
      <Gradient>
        <View className="h-[100%]">
          <View className="h-[20%] mt-20 ">
            <Image
              source={require('../../assets/white_drop_2_2.svg')}
              className=" w-[200px] h-[200px] ml-[9%]"
            />
            <Text className="text-white text-5xl font-bold mb-20">Blood Buddy</Text>
          </View>

          <View className="h-[80%] mt-40">
            <Text className="text-white text-base">Email or Username</Text>
            <TextInput
              className=" text-base bg-white border-white rounded-md pl-2 pr-2 h-10"
              onChangeText={setIdentifier}
              onBlur={validateIdentifier}
            />
            {identifierError ? <Text style={{ color: 'red' }}>{identifierError}</Text> : null}
            <Text className="text-white text-base mt-7">Password</Text>
            <TextInput
              className=" text-base bg-white border-white rounded-md pl-2 pr-2 h-10"
              onChangeText={setPassword}
              onBlur={validatePassword}
              secureTextEntry={true}
            />
            {passwordError ? <Text style={{ color: 'red' }}>{passwordError}</Text> : null}
            <Link href="../signUpTest/index">
              <Text className="text-white text-base border-b-2 border-white mb-5">
                I forgot my password
              </Text>
            </Link>
            <View className="mt-[45%]">
              <Button title="Sign In" onPress={handleSignIn}></Button>
            </View>
          </View>
        </View>
      </Gradient>
    </>
  );
};

export default SignIn;