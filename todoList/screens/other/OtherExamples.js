import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Header from "../../components/Header";

const Stack = createStackNavigator();

export default function Animations() {
  return (
    <Stack.Navigator initialRouteName="FlatList">
      <Stack.Screen
        name="FlatList"
        options={({ navigation, route }) => ({
          headerTitle: (props) => (
            <Header navigation={navigation} {...props} title="FlatList" />
          ),
        })}
        component={AnimationsList}
      />
      <Stack.Screen name="FadeAnim" component={FadeAnim} />
    </Stack.Navigator>
  );
}
