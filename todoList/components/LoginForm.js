import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Input from "./Input";

export default function Form({ setOpenModal }) {
  return (
    <View style={styles.form}>
      <AntDesign
        style={styles.closeBtn}
        name="closecircleo"
        size={24}
        color="black"
        onPress={() => setOpenModal(false)}
      />
      <Text style={styles.title}>Login</Text>
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <View style={styles.loginBtnView}>
        <Text style={styles.text}>Login</Text>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  loginBtnView: {
    backgroundColor: "dodgerblue",
    padding: 10,
    marginBottom: 1,
    width: "80%",
  },
  closeBtn: {
    position: "absolute",
    top: 70,
    right: 20,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    elevation: 8,
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontFamily: "nunito-regular",
    fontSize: 24,
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
  },
});
