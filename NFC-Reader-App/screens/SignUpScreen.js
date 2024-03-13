import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from "../firebaseConfig"

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword (auth,email, password);
      
      
      // Cuenta creada 
      console.log('Cuenta creada:', response.user);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al crear cuenta:', error.message);
      Alert.alert('Error', 'Error al crear cuenta. Inténtalo de nuevo.');
    }
  };

  return (
    <View style={styles.container}>
      <View style = {styles.innerContainer}> 
        <Text style = {styles.textStyled}>Crear Cuenta</Text>
        <TextInput style = {styles.textInputStyled}
          placeholder="  Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput style = {styles.textInputStyled}
          placeholder="  Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity onPress={handleSignUp} style={styles.btnStyled}>
            <Text style={styles.btnLegend}>Registrarse</Text>
        </TouchableOpacity>

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
  textInputStyled: {
    borderWidth:2,
    borderRadius:10,
    borderColor:"#BE1733",
    width:270,
    height:40,
    margin:10,
    textAlign:'left'
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