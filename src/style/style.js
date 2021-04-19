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
  botaoAddList:{
    marginTop: 25,
    marginBottom:25,
    borderRadius:4,
    fontSize:45, 
    height:45,
    width:95,
    marginLeft: 20, 
    
  },
  textBotaoAddList:{
    color:"#FFFFFF",
    fontWeight: 'bold',
    textAlign:'center',
    padding:13
  },
  lista:{
    backgroundColor:"#fff",
    marginTop:10,
    borderRadius: 5,
    width: 340,
    justifyContent:'center',
    padding: 5,
    marginRight:8
  },
  tituloIdeia:{
    fontSize:17,
    color: "#127289",
    fontWeight:'700'
  }, 
  descLista:{
    fontSize:15
  }
});
