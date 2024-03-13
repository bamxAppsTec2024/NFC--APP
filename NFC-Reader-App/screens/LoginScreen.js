import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Image, Text, TouchableOpacity,} from 'react-native';
import {auth} from "../firebaseConfig"
import { signInWithEmailAndPassword } from 'firebase/auth';
import Logo from "../assets/Logo.png"

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth,email, password);

      console.log('Usuario autenticado:', response.user);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Error al iniciar sesión:', error.message);
      Alert.alert('Error', 'Error al iniciar sesión. Verifica tus credenciales.');
    }
  };

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('../assets/Logo.png')} style={styles.logo}/>
        <Text style={styles.textStyled}>Iniciar Sesión</Text>
        <TextInput style={styles.textInputStyled}
          placeholder="  Correo electrónico"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput style={styles.textInputStyled}
          placeholder="  Contraseña"
          value={password}
          onChangeText={setPassword}
          secureTextEn
          try
        />

        <View style={{margin:20}}>
          <TouchableOpacity onPress={handleLogin} style={styles.btnStyled}>
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