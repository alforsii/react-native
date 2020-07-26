import React from "react";
import { SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Transforms from "../../components/transforms/Transforms";
import AboutScreen from "../about/AboutScreen";

const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen name="Transforms" component={Transforms} />
        <Tab.Screen name="AboutScreen" component={AboutScreen} />
        <Tab.Screen name="Transforms3" component={Transforms} />
      </Tab.Navigator>
    </>
  );
}
