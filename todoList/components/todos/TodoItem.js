import React from "react";

import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ todo, removeTodo }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.todo}>Title: {todo.title}</Text>
        <Text style={styles.todo}>
          Completed: {todo.completed ? "Yes" : "No"}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => removeTodo(todo.id)}
        style={styles.removeBtn}
      >
        <MaterialIcons size={35} name="delete" color="red" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    width: "98%",
    margin: 5,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  },
  todo: {
    padding: 10,
    // backgroundColor: "pink",
    fontSize: 22,
    fontFamily: "nunito-regular",
  },
  removeBtn: {
    position: "absolute",
    right: 0,
  },
});
