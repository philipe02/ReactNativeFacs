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
  botaoAddList:{
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
    bottom:35,
    elevation:2,
    zIndex: 9,
    shadowColor:'#000',
    shadowOpacity: 0.2,
    shadowOffset:{
      width:1,
      height:3
    }
  },
  textBotaoAddList:{
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
    fontSize:14
  }
});
