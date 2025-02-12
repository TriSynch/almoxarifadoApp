/* eslint-disable @typescript-eslint/no-unused-vars */

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
import { Formik } from 'formik'
import { useSignUp } from '@/hooks/signUp/useSignUp'

// TODO: Implementar validação de formulário
// const SignUpSchema = Yup.object().shape({
//   fullName: Yup.string().required('Nome completo é obrigatório'),
//   username: Yup.string().required('Nome de usuário é obrigatório'),
//   email: Yup.string().email('Email inválido').required('Email é obrigatório'),
//   sector: Yup.string().required('Setor é obrigatório'),
//   password: Yup.string()
//     .min(8, 'A senha deve ter no mínimo 8 caracteres')
//     .required('Senha é obrigatória'),
//   confirmPassword: Yup.string()
//     .oneOf([Yup.ref('password'), undefined], 'As senhas devem coincidir')
//     .required('Confirmar senha é obrigatório'),
// })

export default function SignUpScreen() {
	const { signUp, loading, error, success } = useSignUp()
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
        <Formik
          initialValues={{
            fullName: '',
            username: '',
            email: '',
            sector: '',
            password: '',
            confirmPassword: '',
          }}
					// TODO: Implementar validação de formulário
          // validationSchema={SignUpSchema}
          onSubmit={async (values) => {
            console.log('Formik onSubmit triggered')
            await signUp(values)
          }}
        >
          {({ handleSubmit, values, errors, setFieldValue }) => {
						console.log('Formik error object:', errors)
            return (
              <ScrollView style={styles.innerContainer}>
                <View style={styles.header}>
                  <Text style={styles.h1}>Registrar</Text>
                </View>

                <View style={styles.formContainer}>
                  {!showLastFields && (
                    <>
                      <View style={styles.formField}>
                        <Text style={styles.h2}>Nome completo</Text>
                        <Input
                          value={values.fullName}
                          fieldName="fullName"
                          setFieldValue={setFieldValue}
                        ></Input>
                      </View>
                      <View style={styles.formField}>
                        <Text style={styles.h2}>Nome de usuário</Text>
                        <Input
                          value={values.username}
                          fieldName="username"
                          setFieldValue={setFieldValue}
                        ></Input>
                      </View>
                      <View style={styles.formField}>
                        <Text style={styles.h2}>Email</Text>
                        <Input
                          value={values.email}
                          fieldName="email"
                          setFieldValue={setFieldValue}
                        ></Input>
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
                        <Input
                          value={values.password}
                          fieldName="password"
                          setFieldValue={setFieldValue}
                        ></Input>
                      </View>
                      <View style={styles.formField}>
                        <Text style={styles.h2}>Confirmar senha</Text>
                        <Input
                          value={values.confirmPassword}
                          fieldName="confirmPassword"
                          setFieldValue={setFieldValue}
                        ></Input>
                      </View>
                      <View style={styles.bottomText}>
                        <Text style={styles.h4}>
                          A senha deve ter no mínimo 8 caracteres, incluindo
                          letras maiúsculas, minúsculas, números e,
                          opcionalmente, caracteres especiais
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
                        onPress={handleSubmit}
                      />
                    </View>
                  </>
                )}
              </ScrollView>
            )
          }}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  )
}
