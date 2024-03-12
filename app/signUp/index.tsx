import React, { useState } from 'react'
import { Text, Alert, StyleSheet, View, AppState, Pressable } from 'react-native';
import { Button, Input } from 'react-native-elements'
import { supabase } from '../../lib/supabase'
import Gradient from '../../components/colors/gradient'
import { TextInput } from 'react-native'
import PrimaryButton from '../../components/buttons/primaryButton'

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
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
        <PrimaryButton title="Become a Buddy!" disabled={loading} onPress={() => signUpWithEmail()} />
      </View>
    </Gradient>
  )
}