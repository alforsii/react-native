import React from "react";
import { SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import AnimationsList from "../../components/animations/AnimationsList";
import Transforms from "../../components/transforms/Transforms";
import Todos from "../../components/todos/Todos";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="AnimationList"
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return (
                <Ionicons name={"ios-list-box"} size={size} color={color} />
              );
            },
          })}
          component={AnimationsList}
        />

        <Tab.Screen
          name="Transforms"
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return (
                <MaterialIcons name="3d-rotation" size={size} color={color} />
              );
            },
          })}
          component={Transforms}
        />
        <Tab.Screen
          name="Todos"
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return (
                <AntDesign name="checkcircleo" size={size} color={color} />
              );
            },
          })}
          component={Todos}
        />
      </Tab.Navigator>
    </>
  );
}
