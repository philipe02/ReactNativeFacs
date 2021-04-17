import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    color: "#000",
    fontSize: 20,
    paddingTop: 7,
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
    textAlign:'center',
    justifyContent:'center',
    alignContent:'center'  
  }, 
  botaoAddList:{
    marginTop: 15,
    borderRadius:4,
    fontSize:45, 
    height:45,
    width:50
  },
  textBotaoAddList:{
    color:"#000",
    fontWeight: 'bold',
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
