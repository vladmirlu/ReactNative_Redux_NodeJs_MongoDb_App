import React, {Component} from 'react';
import {Text, View, ListView, TouchableHighlight} from 'react-native';
import {  Badge, Icon, Button } from 'react-native-elements';

import styles from './ItemList.styles';
import {getAll, remove} from "../api/ItemApi";

export default class ItemList extends Component{
    static navigationOptions = {
        header: <View style={styles.header}>
            <Text style={styles.headerTitle}>  Sayer</Text>
            <Text style={styles.headerText}>   World's most used time waster</Text>
        </View>
    };

        state = {
            itemDataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
            loaded: false
        };

    componentDidMount(){ this.fetchItems() }

    componentDidUpdate(){ this.fetchItems() }

    goToItem(item){this.props.navigation.navigate('Item', {item: item})}

    goToItemForm = () => {this.props.navigation.navigate('NewItem')};

    fetchItems(){
       getAll().then(response => {
           this.setState({
               itemDataSource: this.state.itemDataSource.cloneWithRows(response),
               loaded: true,
           })
       })
    }

    renderRow(item){
        return(
            <TouchableHighlight onPress={() => {this.goToItem(item)}}>
            <View style={styles.row}>
                <Badge value={item.comments.length} status="primary" badgeStyle={styles.rowBadge}/>
                <Text style={styles.rowText}>  {item.title}</Text>
                <Button
                    buttonStyle={styles.rowBtn}
                    title='Delete'
                    onPress={() => remove(item._id)}
               />
            </View>
            </TouchableHighlight>
        )
    }

    render(){
        const renderList =  <ListView
            enableEmptySections
            dataSource={this.state.itemDataSource}
            renderRow={this.renderRow.bind(this)}
        />;

        return(
            <View>
                {renderList}
                <View style={styles.addBtn}>
                <Icon
                    reverse
                    name='plus'
                    type='font-awesome'
                    color='#c5455e'
                    onPress={this.goToItemForm.bind(this)}
               />
                </View>
            </View>
        );
    }
}
