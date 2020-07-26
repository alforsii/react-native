import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Dimensions, SafeAreaView } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import WelcomeScreen from "./components/WelcomeScreen";
import ImageView from "./components/ImageView";
import GameExercise from "./components/GameExercise";

export default function App() {
  const { landscape } = useDeviceOrientation();
  console.log(Dimensions.get("screen"));
  console.log(useDimensions().screen.height);
  // console.log(useDeviceOrientation());
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={GameExercise} />
        {/* <Drawer.Screen name="Animations" component={Animations} /> */}
        {/* <Drawer.Screen name="About" component={AboutScreen} /> */}
        {/* <Drawer.Screen name="Todos" component={TodosScreen} /> */}
        {/* <Drawer.Screen name="Transforms" component={Transforms} /> */}
        {/* <Drawer.Screen name="Tabs" component={Tabs} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
});
