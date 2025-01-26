import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './Input.styles';

const Input = ({ placeholder, value, }: {
	placeholder?: string;
	value?: string;
}) => {
  return (
    <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
      />
  );
};

export default Input;
