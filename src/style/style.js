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
        borderRadius: 5,
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
        fontSize: 24,
        color: '#1d1d1d',
        marginBottom: 15,
        textTransform: 'uppercase'
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
        marginHorizontal: 40
    },
    btnText: {
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    count: {
        position: 'absolute',
        top: -5,
        right: -5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#E37B09'
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
        fontSize: 18,
        paddingHorizontal: 5,
        backgroundColor: '#f5f5f5',
        borderWidth: 1,
        borderColor: "#919191"
    },
    groupButton: {
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between'
    },
    small: {
        fontSize: 14,
        color: "#7b7a7a",
        marginTop: 10
    },
    titleList: {
        color: "#000",
        fontSize: 20,
        marginTop: 10,
        fontWeight: 'bold'
    },
    textList: {
        color: "#000",
        fontSize: 18
    },
    centeredView: {
        flex: 1,
        marginTop: 55,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        margin: 20,
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
    scroll: {
        height: 600,
        width: 330,
        textAlign: 'center',
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
    label: {
        fontSize: 20,
        color: "#1D1D1D",
        marginBottom: 5
    },
    listModal: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
        paddingBottom: 8
    },
    listDetails: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 15,
        paddingBottom: 3,
        borderColor: "#d5d5d5",
        borderBottomWidth: 1,
    },
    listDetailsText: {
        fontSize: 20,
        color: "#1D1D1D",
    },
    listDetailsStrong: {
        fontSize: 20,
        color: "#1D1D1D",
        fontWeight: 'bold'
    },
});
