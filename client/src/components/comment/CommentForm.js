import { reduxForm, Field } from 'redux-form';
import { View } from 'react-native';
import React from 'react'
import {Icon} from "react-native-elements";

import CommentInput from './CommentInput';
import styles from './CommentForm.styles';

function CommentForm(props) {
    return (
        <View style={styles.container} keyboardShouldPersistTaps={'handled'}>
            <Field
                name={'comment'}
                component={CommentInput}
                placeholder={'New comment goes here...'}
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
    form: 'commentForm'
})(CommentForm);