import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 20,
    paddingTop: 7,
    fontWeight:'700'
  }, 
  bgImage: {
    width:370,
    height:600,
    justifyContent:'center',
  }, 
  body:{
    flex:1,
    justifyContent:'center',
    alignItems:'center', 
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
