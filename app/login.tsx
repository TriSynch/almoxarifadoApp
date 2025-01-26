import React from 'react';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from '@/screens/Login/LoginScreen';

export default function LoginTab() {
  return (
    <>
      <StatusBar style="auto" />
      <LoginScreen />
    </>
  );
}
