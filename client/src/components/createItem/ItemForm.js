import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { View } from 'react-native';
import {Icon} from "react-native-elements";

import styles from './ItemForm.styles';
import ItemInput from "./ItemInput";

function ItemForm(props) {

  return (
    <View style={styles.container} keyboardShouldPersistTaps={'handled'}>
      <Field
        name={'title'}
        component={ItemInput}
        placeholder={'New item title...'}
      />
        <Icon
            reverse
            type='font-awesome'
            name='angle-right'
            color='#283061'
            onPress={props.handleSubmit}
        />
    </View>
  );
}

export default reduxForm({
  form: 'itemForm'
})(ItemForm);
