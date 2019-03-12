import { reduxForm, Field } from 'redux-form';
import { ScrollView } from 'react-native';
import React from 'react'

import CommentInput from './CommentInput';
import styles from './CommentForm.styles';
import {Icon} from "react-native-elements";

function CommentForm(props) {
    return (
        <ScrollView style={styles.container} keyboardShouldPersistTaps={'handled'}>
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
        </ScrollView>
    );
}

export default reduxForm({
    form: 'commentForm'
})(CommentForm);