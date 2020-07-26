import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getTodos } from "../../auth_redux/actions/todosActions";
import uuid from "react-uuid";
import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";

// import Header from "../../screens/Header";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

// =-=-=-=-=-=-=-=-=-=- Todos Component =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const Todos = ({ navigation, todosData, getTodos }) => {
  const [todos, setTodos] = useState(todosData);
  useEffect(() => {
    getTodos(); //_limit=10 - change limit in actions getTodos.
  }, []);
  useEffect(() => {
    setTodos(todosData);
  }, [todosData]);

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
};

const mapStateToProps = (state) => {
  // console.log("state", state);
  return {
    todosData: state.todosReducer.todos,
  };
};
const dispatchToProps = (dispatch) => ({
  getTodos: () => dispatch(getTodos()),
});
export default connect(mapStateToProps, dispatchToProps)(Todos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
