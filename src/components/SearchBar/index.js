import React from 'react';
import { TextInput } from 'react-native';

import createStyle from './css';

export default function SearchBar({ onChange, value, ...rest }) {
  const styles = createStyle();
  return <TextInput
    style={styles.search}
    onChangeText={text => onChange(text)}
    value={value}
    {...rest}
  />
}