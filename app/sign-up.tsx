import React from 'react';
import { StatusBar } from 'expo-status-bar';
import SignUpScreen from '@/screens/SignUp/SignUpScreen';

export default function SignUp() {
  return (
    <>
      <StatusBar style="auto" />
      <SignUpScreen />
    </>
  );
}
