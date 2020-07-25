import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Transforms from "../../components/transforms/Transforms";

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
          labelStyle: {
            fontSize: 14,
            textTransform: "uppercase",
          },
          iconStyle: { fontSize: 30 },
        }}
      >
        <Tab.Screen
          name="Transforms"
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return (
                <Ionicons name={"ios-list-box"} size={size} color={color} />
              );
            },
          })}
          component={Transforms}
        />

        <Tab.Screen
          name="Transforms2"
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
          name="Transforms3"
          options={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              // You can return any component that you like here!
              return (
                <AntDesign name="checkcircleo" size={size} color={color} />
              );
            },
          })}
          component={Transforms}
        />
      </Tab.Navigator>
    </>
  );
}
