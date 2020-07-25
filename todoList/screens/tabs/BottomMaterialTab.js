import React from "react";
import { SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Transforms from "../../components/transforms/Transforms";
import PixelRatio from "../../components/pixelRatio/PixelRatio";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  return (
    <>
      <SafeAreaView></SafeAreaView>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
          name="Transforms"
          component={Transforms}
        />
        <Tab.Screen name="PixelRatio" component={PixelRatio} />
        <Tab.Screen name="Transforms3" component={Transforms} />
      </Tab.Navigator>
    </>
  );
}
