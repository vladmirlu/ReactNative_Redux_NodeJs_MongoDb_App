import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    row: {
        flexDirection:'row',
        justifyContent: 'space-between',
        padding:10,
        backgroundColor: '#f4f4f4',
        marginBottom:3
    },
    rowText: {
        flex:1,
        textAlign: 'right'
    },
    rowBtn:{
        backgroundColor: '#2d366e',
        padding: 30,
        margin: 10
    }
});