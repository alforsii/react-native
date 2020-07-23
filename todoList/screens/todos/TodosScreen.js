import React from "react";
import { StyleSheet, Text, View } from "react-native";

// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Header from "../Header";
import Todos from "../../components/todos/Todos";
import Details from "../../components/todos/Details";
// import ScrollViews from "../../components/ScrollViews";
// import Alerts from "../../components/Alerts";

const Stack = createStackNavigator();

export default function TodosScreen() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => {
        return {
          //   headerStyle: { backgroundColor: "dodgerblue" },
          //   headerTintColor: "#fff",
          //   headerTitle: () => <Header title={"Todos"} navigation={navigation} />,
        };
      }}
      initialRouteName="TodosPage"
    >
      <Stack.Screen
        name="TodosPage"
        options={({ navigation }) => {
          return {
            // headerStyle: { backgroundColor: "dodgerblue" },
            // headerTintColor: "#fff",
            headerTitle: () => <Header title="Todos" navigation={navigation} />,
          };
        }}
        component={Todos}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={
          {
            // headerStyle: { backgroundColor: "#fff" },
            // headerTintColor: "#fff",
          }
        }
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
