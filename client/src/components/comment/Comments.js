import React, {Component} from 'react';
import { Text, View, ListView } from 'react-native';
import { Button } from 'react-native-elements';

import styles from './Comments.styles';

export default class Comments extends Component {

    state = { comments: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}) };

    componentDidMount(){ this.initComments() }

    initComments = () => {
        this.setState({comments: this.state.comments.cloneWithRows(this.props.comments)})
    };

    renderRow(comment){
        return(
                <View style={styles.row}>
                    <Button buttonStyle={styles.rowBtn}/>
                    <Text style={styles.rowText}>    {comment}</Text>
                </View>
        )
    }

    render(){
        return(
            <ListView
                enableEmptySections
                dataSource={this.state.comments}
                renderRow={this.renderRow.bind(this)}
            />
        );
    }
}

