import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Header from "../../components/Header";
import AnimationsList from "../../components/animations/AnimationsList";
import FadeAnim from "../../components/animations/fadeAnim/FuncComponent";
import AnimXY from "../../components/animations/animXY/MoveBallXY";
import ResizeBall from "../../components/animations/animXY/ResizeBall";
import PanResponder from "../../components/animations/panResponder/PanResponder";
import Easing from "../../components/animations/easing/Easing";

const Stack = createStackNavigator();

export default function Animations() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AnimationsList"
        options={({ navigation }) => {
          return {
            headerStyle: { backgroundColor: "dodgerblue" },
            // headerTintColor: "#fff",
            headerTitle: () => (
              <Header title="Animations" navigation={navigation} />
            ),
          };
        }}
        component={AnimationsList}
      />
      <Stack.Screen name="FadeAnim" component={FadeAnim} />
      <Stack.Screen name="AnimXY" component={AnimXY} />
      <Stack.Screen name="ResizeBall" component={ResizeBall} />
      <Stack.Screen name="PanResponder" component={PanResponder} />
      <Stack.Screen name="Easing" component={Easing} />
    </Stack.Navigator>
  );
}
