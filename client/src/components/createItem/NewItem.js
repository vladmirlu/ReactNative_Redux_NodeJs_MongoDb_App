import React, {Component} from 'react';

import {create} from "../api/ItemApi";
import ItemForm from "./ItemForm";
import styles from "../item/Item.styles";

export default class NewItem extends Component {
    static navigationOptions = () => {
        return {
            title: "Create new item",
            headerStyle: styles.header,
            headerTitleStyle:styles.headerTitle
        };
    };

    render()
    {
        const onCreate = (item) => {
            create(item);
            return this.props.navigation.navigate('ItemList')
        };
        return(
            <ItemForm onSubmit={(item) => onCreate(item)}/>
        )
    }
}