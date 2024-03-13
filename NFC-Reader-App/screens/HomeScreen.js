import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from "../firebaseConfig";
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register'); 
  };

  return (
    <View style = {styles.container}>
      <View style = {styles.innerContainer}> 
        <Image source={require('../assets/Logo.png')} style={styles.logo}/>
        <Text style = {styles.textStyled}>Esperando lectura de Usuario</Text>
        <View style = {styles.bottomBtn}>
          <TouchableOpacity style={styles.btnStyled} onPress={handleLogout}>
            <Text style = {styles.btnLegend}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
       
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
    ,margin: 30},
  innerContainer: {
    flex:1,
    alignItems:'center',
    
  },
  bottomBtn:{
    flex:1,
    marginBottom:50,
    justifyContent: 'flex-end'
  },
  logo: {
    width:255,
    height:145,
  },    
  textStyled: {
    fontWeight:'bold',
    color: "#626062",
    fontSize:20,
    paddingTop:60,
    paddingBottom:10
  },
  btnStyled:{
    padding: 10,
    backgroundColor: "#E7A716",
    borderRadius: 10,
    width: 170,
    alignContent: "middle",
    justifyContent: "center",
    margin:5
  },
  btnLegend: {
    color: "white",
    fontSize: 17,
    fontWeight: "normal",
    textAlign: "center",
  },

});