import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Input(props) {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#666",
    borderBottomWidth: 2,
    width: "80%",
    padding: 5,
    margin: 15,
    fontSize: 20,
  },
});
