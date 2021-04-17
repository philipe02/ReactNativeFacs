import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    containerFeed: {
        flex: 1,
        padding: 30,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#FFF',
    },
    headerText: {
        color: "#FFFFFF",
        fontSize: 20,
        paddingTop: 7,
        textTransform: 'uppercase'
    },
    bgImage: {
        width:370,
        height:600,
        justifyContent:'center',
    },

    body: {
        flex: 1,
        justifyContent: 'center'
    },
    bg: {
        flex: 1,
        padding: 30,
        resizeMode: "cover",
        alignItems: 'center',
        justifyContent: "center"
    },
    title: {
        fontSize: 28,
        color: '#1d1d1d',
        marginBottom: 15
    },
    button: {
        marginTop: 30,
        borderRadius: 5,
        marginBottom: 15,
        paddingVertical: 5,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#293241',
    },
    btnText: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    count: {
        position: 'absolute',
        top: -6,
        right: -4,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#D16E0B'
    },
    text: {
        color: '#1d1d1d',
        fontSize: 22,
        marginHorizontal: 15,
        marginBottom: 30,
    },
});
