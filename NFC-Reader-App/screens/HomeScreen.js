import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, Modal, Pressable } from "react-native";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import NfcManager, { NfcEvents, Ndef } from "react-native-nfc-manager";

export default function HomeScreen({ navigation }) {
  const [hasNfc, setHasNFC] = useState(false);
  const [nfcModalVisible, setNfcModalVisible] = useState(false);

  useEffect(() => {
    const checkIsSupported = async () => {
      const deviceIsSupported = await NfcManager.isSupported();

      setHasNFC(deviceIsSupported);
      if (deviceIsSupported) {
        await NfcManager.start();
      }
    };

    checkIsSupported();
  }, []);

  useEffect(() => {
    NfcManager.setEventListener(NfcEvents.DiscoverTag, (tag) => {
      const ndef = tag.ndefMessage[0];
      const NfcId = Ndef.text.decodePayload(ndef.payload);

      navigation.navigate("Register", {
        NfcId: NfcId,
      });

      setNfcModalVisible(false);
    });

    return () => {
      NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
    };
  }, []);

  const readTag = async () => {
    setNfcModalVisible(true);
    await NfcManager.registerTagEvent();
  };

  const cancelRead = async () => {
    setNfcModalVisible(false);
    await NfcManager.unregisterTagEvent();
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        {/* Modal to request NFC read */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={nfcModalVisible}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <View style={styles.modalContent}>
                <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 18, marginBottom: 30, fontWeight: 700 }}>Listo para escanear</Text>
                  <MaterialIcons
                    name="sensors"
                    size={80}
                    color="#0860D6"
                    style={{ marginBottom: 5 }}
                  />
                  <Text style={{ fontSize: 15, marginBottom: 30, color: "#5E5E5E" }}>Acerque el tag NFC</Text>
                  <Pressable
                    style={[styles.button, styles.buttonCancelRead]}
                    onPress={cancelRead}
                  >
                    <Text style={{ color: "white" }}>Cancelar</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </Modal>
        {/* Modal to request NFC read */}

        <Image source={require("../assets/Logo.png")} style={styles.logo} />
        <View style={styles.bottomBtn}>
          {hasNfc ? (
            <TouchableOpacity style={styles.btnStyled} onPress={readTag}>
              <Text style={styles.btnLegend}>Hacer lectura</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.textContainer}>
              <Text style={{textAlign: "center", fontWeight: 700}}>Dispositivo sin NFC </Text>
              <Text style={{textAlign: "center"}}>No se pueden realizar lecturas de tarjetas</Text>
            </View>
          )}
          <TouchableOpacity style={styles.btnLogOut} onPress={handleLogout}>
            <Text style={styles.btnLegend}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
  },
  bottomBtn: {
    flex: 1,
    marginBottom: 50,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logo: {
    width: 255,
    height: 145,
  },
  textStyled: {
    fontWeight: "bold",
    color: "#626062",
    fontSize: 20,
    paddingTop: 60,
    paddingBottom: 10,
  },
  btnStyled: {
    padding: 10,
    backgroundColor: "#E7A716",
    borderRadius: 10,
    width: 170,
    alignContent: "middle",
    justifyContent: "center",
    margin: 5,
  },
  btnLogOut: {
    padding: 10,
    backgroundColor: "#767676",
    borderRadius: 10,
    width: 170,
    alignContent: "middle",
    justifyContent: "center",
    margin: 5,
  },
  btnLegend: {
    color: "white",
    fontSize: 17,
    fontWeight: "normal",
    textAlign: "center",
  },
  buttonCancelRead: {
    backgroundColor: "#767676",
    padding: 15,
    borderRadius: 10,
  },
  modalContainer: {
    height: "100%",
    justifyContent: "center",
  },
  modal: {
    marginTop: "auto",
    backgroundColor: "#EEEEEE",
    alignItems: "center",
    height: 300,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: "#D8D8D8",
    marginHorizontal: 10,
  },
  modalContent: {
    marginTop: 30,
  },
  textContainer: {
    alignItems: "center",
    marginBottom: 20,
  }
});
