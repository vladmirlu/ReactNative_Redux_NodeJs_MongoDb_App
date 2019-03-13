import React, {Component} from 'react';
import {View} from 'react-native';

import CommentForm from "../comment/CommentForm";
import Comments from "../comment/Comments";
import {update} from "../api/ItemApi";
import styles from "./Item.styles";

export default class Item extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.state.params.item.title,
            headerStyle: styles.header,
            headerTitleStyle:styles.headerTitle,
            headerTintColor: '#fff'
        };
    };

    render()
     {
         const item = this.props.navigation.state.params.item;

         const onUpdate = (itemId, comment) => {
             update(itemId, comment);
             return this.props.navigation.navigate('ItemList')
         };

        return(
        <View style={{flex: 1}}>
            <View><Comments comments={item.comments}/></View>
            <View style={styles.commentForm}>
            <CommentForm onSubmit={(comment) => onUpdate(item._id, comment)}/>
            </View>
        </View>
        )
    }
}
