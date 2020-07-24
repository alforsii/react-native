import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import HomeScreen from "./screens/home/HomeScreen";
import Animations from "./screens/animations/Animations";
import AboutScreen from "./screens/about/AboutScreen";
import TodosScreen from "./screens/todos/TodosScreen";
import Transforms from "./screens/transform/Transforms";
import Tabs from "./screens/tabs/Tabs";
import CustomButton from "./components/CustomButton";

export default function App() {
  const [fontsLoaded, setFonts] = useState(false);

  const getFonts = () => {
    return Font.loadAsync({
      "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
      "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    });
  };

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Animations" component={Animations} />
          <Drawer.Screen name="About" component={AboutScreen} />
          <Drawer.Screen name="Todos" component={TodosScreen} />
          <Drawer.Screen name="Transforms" component={Transforms} />
          <Drawer.Screen name="Tabs" component={Tabs} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  } else {
    return <AppLoading startAsync={getFonts} onFinish={() => setFonts(true)} />;
  }
}
