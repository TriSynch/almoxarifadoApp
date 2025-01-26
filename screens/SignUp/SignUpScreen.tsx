import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import { styles } from './SignUpScreen.styles'
import Input from '@/components/Input/Input'
import DropdownInput from '@/components/DropdownInput/DropdownInput'

export default function SignUpScreen() {
  const [selectedValue, setSelectedValue] = useState('setorOption1')

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.image}
      />
      <View style={styles.innerContainer}>
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
      </View>
    </View>
  )
}
