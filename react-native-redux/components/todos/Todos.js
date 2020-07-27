import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import uuid from "react-uuid";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { useScrollToTop } from "@react-navigation/native";
import { getTodos } from "../../auth_redux/actions/todosActions";

import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

// =-=-=-=-=-=-=-=-=-=- Todos Component =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
export const Todos = ({ navigation, todosData, getTodos }) => {
  const [todos, setTodos] = useState(todosData);
  const scrollRef = React.useRef();
  useScrollToTop(scrollRef);

  useEffect(() => {
    getTodos(); //_limit=20 - change limit in actions getTodos.
  }, []);
  useEffect(() => {
    setTodos(todosData);
  }, [todosData]);

  const addTodo = (text) => {
    if (!text) return alert("Please enter new todo!");
    setTodos([{ id: uuid(), title: text, completed: false }, ...todos]);
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };
  return (
    <View style={styles.container}>
      <AddTodo addTodo={addTodo} />
      <FlatList
        ref={scrollRef}
        ListFooterComponent={() => (
          <Button
            title="ScrollToTop"
            onPress={() =>
              scrollRef.current.scrollToIndex({ index: 0, animated: true })
            }
          />
        )}
        ListHeaderComponent={() => (
          <View>
            <Button
              title="scrollToEnd"
              onPress={() => scrollRef.current.scrollToEnd()}
            />
            <Button
              title="scrollToIndex 10"
              onPress={() =>
                scrollRef.current.scrollToIndex({ index: 10, animated: true })
              }
            />
            <Button
              title="scrollToOffset"
              onPress={() =>
                scrollRef.current.scrollToOffset({
                  offset: 300,
                  animated: true,
                })
              }
            />
          </View>
        )}
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
