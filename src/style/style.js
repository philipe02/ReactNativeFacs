import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    containerFeed: {
        flex: 1,
        padding: 20,
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
        padding: 20,
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
        paddingVertical: 15,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#293241',
        marginHorizontal: 15
    },
    btnText: {
        fontSize: 16,
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
    input: {
        width: 300,
        height: 45,
        fontSize: 20,
        marginTop: 30,
        paddingHorizontal: 15,
        backgroundColor: '#f5f5f5',
    },
    groupButton: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center'
    },
    small: {
        fontSize: 12,
        color: "#d5d5d5",
        marginTop: 10
    },
    centeredView: {
        flex: 1,
        width: '100%',
        marginTop: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        margin: 20,
        width: 360,
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        padding: 20,
        alignItems: 'flex-start',
        shadowColor: '#000',
        elevation: 5,
        shadowRadius: 3.84,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
    },
    hidden: {
        height: 0,
        width: 0
    },
    list: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderColor: "#d5d5d5",
        borderBottomWidth: 1,
        width: "100%",
        paddingHorizontal: 15,
        paddingBottom: 8
    },
});
