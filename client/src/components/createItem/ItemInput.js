import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './ItemInput.styles';

export default function ItemInput(props) {
  const { input, meta, ...inputProps } = props;

  return (
    <View style={[styles.inputContainer]}>
      <TextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
        style={styles.input}
      />
    </View>
  );
}
