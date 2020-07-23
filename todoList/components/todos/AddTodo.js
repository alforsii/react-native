import React, { useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function AddTodo({ addTodo }) {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputField}>
        <Text style={styles.text}>Add new Todo</Text>
        <TextInput
          style={styles.input}
          onChangeText={(val) => setText(val)}
          value={text}
          placeholder="Type something..."
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Button
          onPress={() => {
            addTodo(text);
            setText("");
          }}
          title="Add"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 2,
    width: "100%",
    fontSize: 18,
    padding: 8,
  },
  inputField: {
    width: "60%",
    margin: 5,
  },
  text: {
    // fontSize: 20,
  },
  //   button: {
  //     paddingHorizontal: 10,
  //     borderRadius: 5,
  //   },
  container: {
    width: "100%",
    marginTop: 10,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
});
