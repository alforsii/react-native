import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { graphql, useQuery } from "react-apollo";
import { gql } from "apollo-boost";

const GET_TODOS = gql`
  query {
    todos {
      _id
      title
      completed
    }
  }
`;

function Todos() {
  const { loading, error, data } = useQuery(GET_TODOS);

  if (loading) return null;
  if (error) return <Text>{`Error! ${error}`}</Text>;

  return data.todos.map((todo) => <Text key={todo._id}> {todo.title} </Text>);
}

export default function MyRootComponent() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Todos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
