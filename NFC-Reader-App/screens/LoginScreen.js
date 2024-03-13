import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import {auth} from "../firebaseConfig"
import { signInWithEmailAndPassword } from 'firebase/auth';

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
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Button title="Crear cuenta" onPress={goToSignUp} />
    </View>
  );
}
