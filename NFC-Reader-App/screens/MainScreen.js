import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity,} from 'react-native';

export default function MainScreen({ navigation }) {
    const goToSignIn = () => { navigation.navigate('Login'); };

    const goToSignUp = () => { navigation.navigate('SignUp'); };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../assets/Logo.png')} style={styles.logo}/>
        <Text style={styles.textStyled}>¡Bienvenid@!</Text>
        <Text style={styles.textStyled2}>BAMX Hermosillo</Text>

        <View style={{margin:20}}>
          <TouchableOpacity onPress={goToSignIn} style={styles.btnStyled}>
            <Text style={styles.btnLegend}>Iniciar Sesión</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={goToSignUp} style={styles.btnStyled}>
            <Text style={styles.btnLegend}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {margin: 30},
  innerContainer: {
    alignItems:'center',
  },
  logo: {
    width:255,
    height:145,
  },    
  textStyled: {
    fontWeight:'bold',
    color: "#626062",
    fontSize:32,
    paddingTop:10,
    paddingBottom:10
  },
  textStyled2: {
    fontWeight:'normal',
    color: "#626062",
    fontSize:16,
    paddingTop:10,
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
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",
  },

});