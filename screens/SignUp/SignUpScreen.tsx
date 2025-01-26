import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import { styles } from './SignUpScreen.styles';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function SignUpScreen() {
	
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    Alert.alert('Sucesso', `Bem-vindo, ${email}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar</Text>
      <Input 
        label="E-mail"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
				secureTextEntry={false}
      />
      <Input 
        label="Senha"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
};
