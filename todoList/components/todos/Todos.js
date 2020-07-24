import React, { useState } from "react";
import uuid from "react-uuid";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

import { data } from "../../data";

// import Header from "../../screens/Header";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

export default function Todos({ navigation }) {
  const [todos, setTodos] = useState(data);

  const addTodo = (text) => {
    if (!text) return alert("Please enter new todo!");
    setTodos([{ id: uuid(), title: text, completed: false }, ...todos]);
  };

  const removeTodo = (id) => {
    console.log("removeTodo -> id", id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };
  return (
    <View style={styles.container}>
      {/* <Header navigation={navigation} title="Todos" /> */}
      {/* <Button
        title="Go to DetailsPage"
        onPress={() => navigation.navigate("Details")}
      /> */}
      <AddTodo addTodo={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", item)}
          >
            <TodoItem removeTodo={removeTodo} todo={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
