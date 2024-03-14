import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {doc, getDoc } from "firebase/firestore";
import { db } from '../firebaseConfig';

export default function RegisterScreen({ route, navigation }) {
  const { NfcId } = route.params;
  const [userData, setUserData] = useState(null);

  // Initialize Cloud Firestore and get a reference to the service

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const docRef = doc(db, "NFC", NfcId)
        const docSnap = await getDoc(docRef)
        
        if(docSnap){
          const data = docSnap.data()

          const day = new Date().getDate()
          const month = new Date().getMonth()
          const year = new Date().getFullYear()

          const nombresMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
          "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

          // Formatear la fecha
          const fechaFormateada = `${nombresMeses[month]} ${day}, ${year}`;

          setUserData({
            apellido: data.apellido,
            curp: data.curp,
            direccion: data.direccion,
            fecha: fechaFormateada,
            folio: data.folio,
            nombre: data.nombre,
            telefono: data.telefono
          });
        } else {
          console.log("No existe el documento con ese ID");
        }
      } catch (error) {
        console.error("Error al obtener datos del usuario:", error);
      }
    };

    fetchUserData(); 
  }, []); 

  return (
    <View style={styles.container}>
      {userData && (
        <>
          <View style={styles.header}>
            <View style={styles.orangeContainer}>
              <Text style={styles.title}>Folio:</Text>
              <Text style={[styles.title, styles.folio]}>{userData.folio}</Text>
          </View>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.leftData}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Nombre(s):</Text>
                <Text style={styles.dataText}>{userData.nombre}</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Apellidos:</Text>
                <Text style={styles.dataText}>{userData.apellido}</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Telefono Celular:</Text>
                <Text style={styles.dataText}>{userData.telefono}</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>CURP:</Text>
                <Text style={styles.dataText}>{userData.curp}</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Dirección:</Text>
                <Text style={styles.dataText}>{userData.direccion}</Text>
              </View>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Fecha de registro:</Text>
                <Text style={styles.dataText}>{userData.fecha}</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    margin: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  orangeContainer: {
    backgroundColor: '#FFA500',
    paddingVertical: 100,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  folio: {
    fontSize: 16,
    fontWeight: 'normal',
    marginLeft: 5,
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftData: {
    flex: 1,
    marginLeft: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
  },
  dataText: {
    fontSize: 14,
  },
});


