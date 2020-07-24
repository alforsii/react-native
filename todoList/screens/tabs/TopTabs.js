import React from "react";
import { SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import AnimationsList from "../../components/animations/AnimationsList";
import Transforms from "../../components/transforms/Transforms";
import Todos from "../../components/todos/Todos";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="AnimationsList" component={AnimationsList} />
        <Tab.Screen name="Transforms" component={Transforms} />
        <Tab.Screen name="Todos" component={Todos} />
      </Tab.Navigator>
    </>
  );
}
