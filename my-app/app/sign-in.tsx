import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import icons from '@/constants/icons'

const SignIn = () => {

  const handleLogin = () => {

  }

  return (
    // Safe Area View ensures that the content should safely fits inside the safe area irrespective of mobile device.
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerClassName='h-full'>
        <Image source={images.onboarding} className="w-full h-4/6" resizeMode={"contain"} />
        <View className='px-8'>
          <Text className='text-base text-center uppercase font-rubik text-black-200'>Welcome to ReState</Text>
          <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
              Let's Get You Closer to{"\n"}
              <Text className='text-primary-300'>Your Ideal Home</Text>
          </Text>
          <Text className='text-center mt-8 font-rubik text-lg text-black-200'>
            Login to ReState with Google
          </Text>
          <TouchableOpacity onPress={handleLogin} className="bg-white shadow-lg shadow-zinc-500 rounded-full w-full mt-3 py-3">
            <View className='flex flex-row items-center justify-center'>
              <Image source={icons.google} className="w-6 h-6" resizeMode='contain' />
              <Text className='text-lg font-rubik-medium text-black-300 ml-2'>Continue with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn