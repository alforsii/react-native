import React from "react";
import { StyleSheet, TextInput } from "react-native";

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
    marginBottom: 5,
    fontSize: 20,
  },
});
