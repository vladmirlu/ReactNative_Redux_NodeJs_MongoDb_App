import { StyleSheet } from "react-native";

export default StyleSheet.create({

    header: {
        marginTop: 20,
        backgroundColor: '#181f49',
        height: 130
    },

    headerTitle: {
    fontSize: 40,
    color: '#fff'
    },

    headerText: {
        fontSize: 15,
        color: '#fff'
    },

    row: {
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        backgroundColor: '#f4f4f4',
        marginBottom:3
    },

    rowText: {
        flex:1
    },

    rowBtn: {
        backgroundColor: '#ab3a4a'
    },

    rowBadge: {
        backgroundColor: '#1d2557',
        color: '#f4f4f4'
    }

});