/*import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';



function AuthScreen({ navigation }) {
  const [email, onChangeEmail] = useState();
  const [password, onChangeNumber] = useState();
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email adress"
        keyboardType="email-address"
        inputMode = "email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="Password"
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <Pressable
        onPress={() =>
          {auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              console.log('User signed in using email - password');
              navigation.navigate("Home");
            })
            .catch(error => {
              if (error.code === 'auth/operation-not-allowed') {
                console.log('Enable email - password in your firebase console.');
              }
              if (error.code === 'auth/wrong-password') {
                console.log('The password is invalid!!!');
              }
          
              console.error(error);
            })
          }
        }
        style={styles.button}>
        <Text style={styles.text}>Log In</Text>
      </Pressable>
      <Pressable
      onPress={() => navigation.navigate("SignUp")}
      style={styles.button}>
        <Text style={styles.text}>Register</Text>
      </Pressable>
    </View>
  );
};

function HomeScreen({ navigation }) {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    navigation.navigate('Auth');
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={styles.text}>Loged out</Text>
          <Pressable
            onPress={
              () => navigation.navigate('Auth')
            }
            style={styles.button}>
              <Text style={styles.text}>Log in page</Text>
          </Pressable>
        </View>
      );
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.text}>Already loged In</Text>
      <Text style={styles.text}>Welcome {user.email}</Text>
      <Pressable 
        onPress={
          () => auth()
          .signOut()
          .then(() => navigation.navigate('Auth'))
        }
        style={styles.button}>
          <Text style={styles.text}>Log Out</Text>
      </Pressable>
    </View>
  );
}

function SignUpScreen({ navigation }) {
  const [email, onChangeEmail] = useState('');
  const [password, onChangeNumber] = useState('');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email adress"
        keyboardType="email-address"
        inputMode = "email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="Password"
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <Pressable
        onPress={
          () => {auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log('User account created & signed in!');
              navigation.navigate("Home");
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }
          
              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }
          
              console.error(error);
            })
          }
        }
        style={styles.button}>
          <Text style={styles.text}>Submit</Text>
        </Pressable>
      <Pressable
        onPress={() => navigation.goBack()} 
        style={styles.button}>
          <Text style={styles.text}>Go back</Text>
        </Pressable>
    </View>
  );
};


const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 6,
    padding: 10,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    width: '80%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    paddingHorizontal: 16,
    margin: 6,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: '#33B6FF',
    width: '50%',
  },
  text: {
    padding: 10,
    color: '#555555',
    textAlign: 'center',
    fontSize: 20,
  },
});

export default function App() {
    
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}*/