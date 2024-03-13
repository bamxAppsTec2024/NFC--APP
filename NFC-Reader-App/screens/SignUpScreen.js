import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
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
    <View>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Crear cuenta" onPress={handleSignUp} />
    </View>
  );
}
