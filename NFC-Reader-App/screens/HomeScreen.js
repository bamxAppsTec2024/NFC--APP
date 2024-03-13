import React from 'react';
import { View, Text, Button} from 'react-native';
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
    <View>
      <Text>Bienvenido</Text>
      <Button title="Cerrar sesión" onPress={handleLogout} />
      <TouchableOpacity style={{ marginTop: 20, textAlign: 'center', textDecorationLine: 'underline' }} onPress={handleRegister}><Text>Register</Text></TouchableOpacity>
    </View>
  );
}
