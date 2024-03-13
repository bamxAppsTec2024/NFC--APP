import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
const logoImg = require("../assets/Logo.png");

const Header = () => {
  const navigation = useNavigation();

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectangle1} />
      <View style={styles.rectangle2} />
      <Image source={logoImg} style={styles.logo} />
      <TouchableOpacity onPress={handleNavigateToRegister}>
      <Text style={styles.text}>Esperando lectura de usuario</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
  },
  rectangle1: {
    width: '100%',
    height: 100,
    backgroundColor: '#E11531',
  },
  rectangle2: {
    width: '100%',
    height: 25,
    backgroundColor: '#4B9839', 
    marginTop: -5,  
  },
  logo: { 
    height: 190, 
    resizeMode: 'contain', 
    marginTop: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#676568',
    textAlign: 'center',
    marginTop: 100
  },
});

export default Header;