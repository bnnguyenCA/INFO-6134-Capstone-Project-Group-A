import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    container: {
        padding: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 17,
        color: '#777777',
        marginBottom: 10,
    },
    options: {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
        },
        label: {
            marginLeft: 10,
            fontSize: 17,
        },
    }
})