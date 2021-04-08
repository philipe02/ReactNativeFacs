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
  botao:{
    backgroundColor:"#D16E0B",
    color:"#000",
    fontWeight: 'bold',
    marginTop: 15,
    borderRadius:4,
    fontSize:45, 
    height:45,
    width:150
  }
});
