import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { styles } from './SignUpScreenPart2.styles'
import Input from '@/components/Input/Input'

export default function SignUpScreenPart2() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
        <ScrollView style={styles.innerContainer}>
          <View style={styles.header}>
            <Text style={styles.h1}>Registrar</Text>
          </View>

          <View style={styles.formContainer}>
            <View style={styles.formField}>
              <Text style={styles.h2}>Senha</Text>
              <Input></Input>
            </View>
            <View style={styles.formField}>
              <Text style={styles.h2}>Confirmar Senha</Text>
              <Input></Input>
            </View>
          </View>

          <View style={styles.bottom1}>
            <Text style={styles.h4}>
              A senha deve ter no mínimo 8 caracteres, incluindo letras
              maiúsculas, minúsculas, números e, opcionalmente, caracteres
              especiais
            </Text>
          </View>

          <View style={styles.bottom2}>
            <Text style={styles.h2}>Botao que o jairan ainda nao fez</Text>
						<Text>porra jairan</Text>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}
