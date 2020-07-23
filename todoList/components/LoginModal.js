import React, { useState } from "react";
import { StyleSheet, View, Text, Modal } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import LoginForm from "./LoginForm";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function LoginModal() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={styles.modal}>
      <TouchableOpacity
        style={styles.openBtn}
        onPress={() => setOpenModal(true)}
      >
        <FontAwesome name="sign-in" size={34} color="dodgerblue" />
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <Modal visible={openModal} animationType="slide">
        <LoginForm setOpenModal={setOpenModal} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    // alignItems: "center",
  },
  openBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    padding: 5,
  },
});
