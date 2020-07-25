import React from "react";
import { SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Transforms from "../../components/transforms/Transforms";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="Transforms" component={Transforms} />
        <Tab.Screen name="Transforms2" component={Transforms} />
        <Tab.Screen name="Transforms3" component={Transforms} />
      </Tab.Navigator>
    </>
  );
}
