import "react-native-gesture-handler"; // <= DO NOT REMOVE or DO NOT MOVE DOWN - DO NOT TOUCH!
import * as React from "react";
import { useState } from "react";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { Provider } from "react-redux";
import { reduxStore } from "./auth_redux/store";

import * as Font from "expo-font";
import { AppLoading } from "expo";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import { createDrawerNavigator } from "@react-navigation/drawer";
// import { enableScreens } from "react-native-screens";
// enableScreens();
const Drawer = createDrawerNavigator();

import HomeScreen from "./screens/home/HomeScreen";
import Animations from "./screens/animations/Animations";
import AboutScreen from "./screens/about/AboutScreen";
import TodosScreen from "./screens/todos/TodosScreen";
import Transforms from "./screens/transform/Transforms";
import Tabs from "./screens/tabs/Tabs";
import ExamplesStacks from "./screens/examplesList/ExamplesStacks";

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
      text: "#fff",
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
              <Drawer.Screen name="All Examples" component={ExamplesStacks} />
              <Drawer.Screen name="Animations" component={Animations} />
              <Drawer.Screen name="About" component={AboutScreen} />
              <Drawer.Screen name="Tabs" component={Tabs} />
              <Drawer.Screen name="Todos" component={TodosScreen} />
              <Drawer.Screen name="Transforms" component={Transforms} />
            </Drawer.Navigator>
          </NavigationContainer>
        </AppearanceProvider>
      </Provider>
    );
  } else {
    return <AppLoading startAsync={getFonts} onFinish={() => setFonts(true)} />;
  }
}
