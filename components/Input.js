import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function Input(props) {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0.5,
    borderColor: "#666",
    borderRadius: 3,
    width: "100%",
    padding: 5,
  },
});
