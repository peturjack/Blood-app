import React, { useState, useEffect } from 'react';
import { Text, Alert, View, TextInput, TouchableOpacityBase, TouchableOpacity } from 'react-native';
import { supabase } from '../../lib/supabase';
import Gradient from '../../components/colors/gradient';
import PrimaryButton from '../../components/buttons/primaryButton';
import { Link, router } from 'expo-router';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [redirectToSignIn, setRedirectToSignIn] = useState(false);

  async function signUpWithEmail() {

    setLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert(error.message);
      setLoading(false);
      return;
    }
    if (data && data.user) {
      Alert.alert('Registration successful!');
      setLoading(false);
      setRegistrationSuccess(true);
      router.push("/signIn");
    }
  }

  return (
    <Gradient>
      <View className="h-[80%] items-center ">
        <Text className="text-white font-bold text-4xl mt-10">Sign Up!</Text>
        <View className="flex-none w-[238px] h-[32px] text-center right-[25%]">
          <Text className="text-white font-bold text-[24px] mt-[15%]">Personal information</Text>
          <View className="h-[10%]">
            <Text className="text-white text-base mt-5">Name</Text>
            <TextInput className="flex-none h-[41px] w-[364px] mt-3 rounded-xl bg-white" />
            <Text className="text-white text-base mt-5">Social Security Number</Text>
            <TextInput className="flex-none h-[41px] w-[364px] mt-3 rounded-xl bg-white" />
            <Text className="text-white text-base mt-5">Email</Text>
            <TextInput className="flex-none h-[41px] w-[364px] mt-3 rounded-xl bg-white"
              autoCapitalize="none"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <Text className="text-white text-base mt-5">Phone</Text>
            <View className="flex-row justify-between">
              <TextInput className="flex-none h-[41px] w-[80px] mt-3 rounded-xl bg-white" />
              <TextInput className="flex-none h-[41px] w-[268px] mt-3 rounded-xl bg-white ml-[16px]" />
            </View>
            <Text className="text-white font-bold text-[24px] mt-[15%]">Password</Text>
            <Text className="text-white text-base mt-5">Password</Text>
            <TextInput className="flex-none h-[41px] w-[364px] mt-3 rounded-xl bg-white"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              autoCapitalize={'none'}></TextInput>
            <Text className="text-white text-base mt-5">Re-enter Password</Text>
            <TextInput className="flex-none h-[41px] w-[364px] mt-3 rounded-xl bg-white"
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
              autoCapitalize={'none'}></TextInput>
          </View>
          <View className='absolute'>
          </View>
        </View>
      </View>
      <View className='mt-auto mb-[10%]'>
        <PrimaryButton title="Become a Buddy!" onPress={() => signUpWithEmail()} disabled={loading} />
      </View>
    </Gradient>
  )
}
