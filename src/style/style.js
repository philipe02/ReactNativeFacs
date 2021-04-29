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
    tituloInput: {
        fontWeight: 'bold',
        fontSize: 20,
        color:'#000',
        textAlign:'left',
        marginLeft:10
    },
    botaoContainer:{
        marginTop: 25,
        marginBottom:25,
        flexDirection:'row'
    },
    botaoSalveCancel:{
        height:45,
        width:95,
        marginLeft: 20,
        borderRadius:5,
    },
    botaoaddIdeia:{
        position: 'absolute',
        width: 48,
        height:48,
        backgroundColor: '#1D1D1D',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        right: 25,
        bottom:25,
        elevation:2,
        zIndex: 9,
        shadowColor:'#000',
        shadowOpacity: 0.2,
        shadowOffset:{
            width:1,
            height:3
        }
    },
    acoesLista: {
        position:'absolute',
        justifyContent:'space-between',
        flexDirection:'row',
        right:10
    },
    textBotaoSalveCancel:{
        color:"#FFFFFF",
        fontWeight: 'bold',
        textAlign:'center',
        padding:13,
        fontSize:15,
    },
    lista:{
        backgroundColor:"#fff",
        marginTop:10,
        borderRadius: 5,
        width: '92%',
        justifyContent:'center',
        padding: 5,
        marginRight:8
    },
    tituloIdeia:{
        fontSize:17,
        color: "#127289",
        fontWeight:'700'
    },
    descIdeia:{
        fontSize:14,
        width: '80%'
    },
    tituloExclusao:{
        fontSize:19,
        margin:8,
        textAlign:'center',
        fontWeight:'700',
        color: '#1281AB'
    },
    containerExclusao:{
        backgroundColor:'#FFFFFF',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:5,
        width:'90%',
        height:'30%',
        marginLeft:14,
    },
    textRadio:{
        fontSize:17,
        marginLeft:10,
        alignContent:'center',
        padding:8
    },
    botaoVoto:{
        backgroundColor: "#1281AB",
        marginLeft: 8,
        padding: 5,
        borderRadius: 5,
        height:30,
        width:50,
    },
    modalRank:{
        backgroundColor:'#FFFFFF',
        margin:10,
        borderRadius:5,
        padding:5,
        width:340,
        height:250,
        flexDirection:'column'
    },
    textoRank:{
        color:'#127289',
        paddingBottom:3,
        fontSize:16,
        fontWeight:'700'
    },
    viewBotao:{
        margin:5,
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center'
    },
    botaoRank:{
        backgroundColor:'#E37B09',
        width:70,
        height:40,
        borderRadius:5,
        alignItems:'center',
        marginTop:10,
        marginBottom:10
    },
    textoBotaoRank:{
        color:'#FFFFFF',
        fontSize:17,
        fontWeight:'700',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:8
    },
    dadosRank:{
        fontSize:16,
    }
});
