import { StyleSheet } from "react-native";

export default StyleSheet.create({

    header: {
        marginTop: 22,
        backgroundColor: '#181f49',
        height: 130
    },

    headerTitle: {
    fontSize: 42,
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
        flex:1,
        fontSize: 20,
        color: '#181f49',
    },

    rowBtn: {
        backgroundColor: '#ab3a4a',
        margin: -8,
        padding: 10
    },

    addBtn: {
        justifyContent : 'center',
        alignItems:"center"
    },

    rowBadge: {
        backgroundColor: '#1d2557',
    }

});