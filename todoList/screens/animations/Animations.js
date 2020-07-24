import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Header from "../../components/Header";
import AnimationsList from "../../components/animations/AnimationsList";
import FadeAnim from "../../components/animations/fadeAnim/FuncComponent";
import AnimXY from "../../components/animations/animXY/MoveBallXY";
import ResizeBall from "../../components/animations/animXY/ResizeBall";
import PanResponder from "../../components/animations/panResponder/PanResponder";

const Stack = createStackNavigator();

export default function Animations() {
  return (
    <Stack.Navigator initialRouteName="Animations">
      <Stack.Screen
        name="Animations"
        options={({ navigation, route }) => ({
          headerTitle: (props) => (
            <Header navigation={navigation} {...props} title="Animations" />
          ),
        })}
        component={AnimationsList}
      />
      <Stack.Screen name="FadeAnim" component={FadeAnim} />
      <Stack.Screen name="AnimXY" component={AnimXY} />
      <Stack.Screen name="ResizeBall" component={ResizeBall} />
      <Stack.Screen name="PanResponder" component={PanResponder} />
    </Stack.Navigator>
  );
}
