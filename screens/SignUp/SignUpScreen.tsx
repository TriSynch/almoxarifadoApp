import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { styles } from './SignUpScreen.styles'
import Input from '@/components/Input/Input'
import DropdownInput from '@/components/DropdownInput/DropdownInput'

export default function SignUpScreen() {
  const [selectedValue, setSelectedValue] = useState('setorOption1')

	function handleClick() {
		console.log('back')
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
        </View>
				
				<View style={styles.bottom}>
					<TouchableOpacity  style={styles.buttonBottom} onPress={handleClick}>
					<Image
						source={require('../../assets/images/arrow-right.png')}
						style={styles.arrowRight}
					/>
					</TouchableOpacity >
				</View>
      </ScrollView>
    </View>
		</KeyboardAvoidingView>
  )
}
