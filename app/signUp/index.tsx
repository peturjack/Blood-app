import React, { useState, useEffect } from 'react';
import { Text, Alert, View, TextInput } from 'react-native';
import { supabase } from '../../lib/supabase';
import Gradient from '../../components/colors/gradient';
import PrimaryButton from '../../components/buttons/primaryButton';
import { Link } from 'expo-router';

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
    }
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (registrationSuccess) {
      timer = setTimeout(() => {
        setRedirectToSignIn(true);
      }, 0);
    }
    return () => clearTimeout(timer);
  }, [registrationSuccess]);

  if (redirectToSignIn) {
    return (
      <Gradient>
        <View className='flex-1 justify-center items-center'>
          <Text className='text-white text-[24px]'>Registration successful!</Text>
          <Text className='text-white text-[16px]'>You can now sign in.</Text>
          <Link href={'/signIn'}>
            <View className='mt-10'>
              <PrimaryButton title="Sign In!" />
            </View>
          </Link>
        </View>
      </Gradient>
    );
  }

  return (
    <Gradient>
      <View className="h-[80%] items-center ">
        <Text className="text-white font-bold text-4xl mt-10">Sign Up!</Text>
        <View className="flex-none w-[238px] h-[32px] text-center right-[25%]">
          <Text className="text-white font-bold text-[24px] mt-[15%]">Personal information</Text>
          <View className="h-[10%]">
            <Text className="text-white text-base mt-5">Name</Text>
            <TextInput className="flex-none h-[41px] w-[364px] mt-3 rounded-xl bg-white"
              onChangeText={(text) => setEmail(text)}
              value={email}
              autoCapitalize={'none'}></TextInput>
            <Text className="text-white text-base mt-5">Password</Text>
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
      <View className='h-[20%]'>
        <PrimaryButton title="Become a Buddy!" onPress={() => signUpWithEmail()} disabled={loading} />
      </View>
    </Gradient>
  )
}
