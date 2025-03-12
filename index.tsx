import { Text, View, StyleSheet } from "react-native";
import {Image} from "expo-image"
const foto= require ("../assets/images/react-logo.png")

export default function Index() {
  return (
    <View style = {estilos.container} >
    <Image source ={foto} style={estilos.foto}/>
    <Text style= {estilos.text}>kau</Text>
    </View>
      
     ); }
    

const estilos = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent :"center",
    alignItems:"center",
    backgroundColor:"purple",


  },
  foto:{
  width:300,
  height:300,
  
  },
  text:{
    color:"blue"
    fontsize:20
  },
})


