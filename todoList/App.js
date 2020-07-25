import React, { useState } from "react";
import { Provider } from "react-redux";
import { reduxStore } from "./auth_redux/store";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
const Drawer = createDrawerNavigator();

import HomeScreen from "./screens/home/HomeScreen";
import Animations from "./screens/animations/Animations";
import AboutScreen from "./screens/about/AboutScreen";
import TodosScreen from "./screens/todos/TodosScreen";
import Transforms from "./screens/transform/Transforms";
import Tabs from "./screens/tabs/Tabs";

export default function App() {
  const scheme = useColorScheme();
  const [fontsLoaded, setFonts] = useState(false);
  const getFonts = () => {
    return Font.loadAsync({
      "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
      "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    });
  };

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#000",
      text: "#333",
      card: "dodgerblue",
      border: "red",
      notification: "green",
      background: "#f5f5f5",
    },
  };

  if (fontsLoaded) {
    return (
      <Provider store={reduxStore}>
        <AppearanceProvider>
          <NavigationContainer theme={scheme === "dark" ? DarkTheme : MyTheme}>
            <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen name="Home" component={HomeScreen} />
              <Drawer.Screen name="Animations" component={Animations} />
              <Drawer.Screen name="About" component={AboutScreen} />
              <Drawer.Screen name="Todos" component={TodosScreen} />
              <Drawer.Screen name="Transforms" component={Transforms} />
              <Drawer.Screen name="Tabs" component={Tabs} />
            </Drawer.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      </Provider>
    );
  } else {
    return <AppLoading startAsync={getFonts} onFinish={() => setFonts(true)} />;
  }
}
