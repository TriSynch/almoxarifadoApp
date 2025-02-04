import React, { useState } from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { styles } from './SignUpScreen.styles'
import Input from '@/components/Input/Input'
import DropdownInput from '@/components/DropdownInput/DropdownInput'
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton'

export default function SignUpScreen() {
  const [selectedValue, setSelectedValue] = useState('setorOption1')
  const [showLastFields, setShowLastFields] = useState(false) // State to control visibility

  function handleClick() {
    setShowLastFields(true) // Show the last two fields when the button is clicked
  }

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
            {!showLastFields && (
              <>
                <View style={styles.formField}>
                  <Text style={styles.h2}>Nome completo</Text>
                  <Input></Input>
                </View>
                <View style={styles.formField}>
                  <Text style={styles.h2}>Nome de usuário</Text>
                  <Input></Input>
                </View>
                <View style={styles.formField}>
                  <Text style={styles.h2}>Email</Text>
                  <Input></Input>
                </View>
                <View style={styles.formField}>
                  <Text style={styles.h2}>Setor</Text>
                  <DropdownInput
                    selectedValue={selectedValue}
                    setSelectedValue={setSelectedValue}
                  ></DropdownInput>
                </View>
              </>
            )}

            {showLastFields && (
              <>
                <View style={styles.formField}>
                  <Text style={styles.h2}>Senha</Text>
                  <Input></Input>
                </View>
                <View style={styles.formField}>
                  <Text style={styles.h2}>Confirmar senha</Text>
                  <Input></Input>
                </View>
                <View style={styles.bottomText}>
                  <Text style={styles.h4}>
                    A senha deve ter no mínimo 8 caracteres, incluindo letras
                    maiúsculas, minúsculas, números e, opcionalmente, caracteres
                    especiais
                  </Text>
                </View>
              </>
            )}
          </View>

          {!showLastFields && (
            <>
              <View style={styles.bottom1}>
                <TouchableOpacity
                  style={styles.buttonBottom}
                  onPress={handleClick}
                >
                  <Image
                    source={require('../../assets/images/arrow-right.png')}
                    style={styles.arrowRight}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}

          {showLastFields && (
            <>
              <View style={styles.bottom1}>
                <PrimaryButton
                  title={'Salvar'}
                  onPress={() => {
                    console.log('a')
                  }}
                />
              </View>
            </>
          )}
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  )
}
