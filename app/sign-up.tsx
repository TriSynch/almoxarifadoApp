import React from 'react'
import SignUpScreen from '@/screens/SignUp/SignUpScreen'
import SignUpScreenPart2 from '@/screens/SignUp/SignUpScreenPart2'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const sharedOptions = {
	headerShown: false,
}
export default function SignUp() {
  return (
    <>
      <Stack.Navigator initialRouteName="SignUp">
        <Stack.Screen options={sharedOptions} name="SignUp" component={SignUpScreen} />
        <Stack.Screen options={sharedOptions} name="SignUpPart2" component={SignUpScreenPart2} />
      </Stack.Navigator>
    </>
  )
}
