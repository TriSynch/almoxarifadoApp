import React, { useState } from 'react';
import { View, Text, Alert, Image, ScrollView, TouchableOpacity } from 'react-native';
import Input from '@/components/Input/Input';
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton';
import { styles } from './LoginScreen.styles';

const LoginScreen = () => {
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
      <Image
              source={require('../../assets/images/logo.png')}
              style={styles.logo}
      />
      <ScrollView style={styles.innerContainer}>

      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.formContainer}>

      <View style={styles.formField}>
        <Text style={styles.h2}>Email</Text>
        <Input 
        label="email"
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
				secureTextEntry={false}
        />
      </View>
      
      <View style={styles.formField}>
        <Text style={styles.h2}>Senha</Text>
        <Input style ={styles.input}
        label="senha"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
      </View>
      
      <View style={styles.bottom}>
        <PrimaryButton title={"Entrar"}></PrimaryButton>
      </View>
      

      </View>
      
      </ScrollView>
      
    </View>
  );
};

export default LoginScreen;
