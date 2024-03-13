import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function RegisterScreen({ navigation }) {
//const Register = () => {
  const data = {
    name: 'Miguel Alejandro',
    lastName: 'Botello Méndez',
    phone: '6624232887',
    curp: 'dkckjcbekcbekjecnekjc',
    address: 'Multan',
    date: '04/03/2024',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.orangeContainer}>
          <Text style={styles.title}>Folio:</Text>
          <Text style={[styles.title, styles.folio]}>1234567</Text>
        </View>
      </View>
      <View style={styles.dataContainer}>
        <View style={styles.leftData}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Nombre(s):</Text>
            <Text style={styles.dataText}>{data.name}</Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Apellidos:</Text>
            <Text style={styles.dataText}>{data.lastName}</Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Telefono Celular:</Text>
            <Text style={styles.dataText}>{data.phone}</Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>CURP:</Text>
            <Text style={styles.dataText}>{data.curp}</Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Dirección:</Text>
            <Text style={styles.dataText}>{data.address}</Text>
          </View>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Fecha de registro:</Text>
            <Text style={styles.dataText}>{data.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

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

//export default Register;
