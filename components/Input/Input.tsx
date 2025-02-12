import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './Input.styles';

const Input = ({ placeholder, value, fieldName, setFieldValue }: {
	placeholder?: string;
	value: string;
	fieldName: string;
	setFieldValue: (field: string, value: string) => void;
}) => {
  return (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
				onChangeText={(value) => setFieldValue(fieldName, value)}
      />
  );
};

export default Input;
