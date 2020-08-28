import React, { useState } from "react";
import { connect } from "react-redux";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";

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

export const AppNavigator = ({ loggedIn }) => {
  const scheme = useColorScheme();
  const [fontsLoaded, setFonts] = useState(false);
  const getFonts = () => {
    return Font.loadAsync({
      "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
      "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
    });
  };

  if (fontsLoaded) {
    return (
      <AppearanceProvider>
        <NavigationContainer theme={scheme === "dark" ? DarkTheme : MyTheme}>
          <Drawer.Navigator initialRouteName="Home">
            {(context) => {
              console.log(context);
            }}
            <Drawer.Screen name="Home" component={HomeScreen} />
            {loggedIn ? (
              <>
                <Drawer.Screen name="All Examples" component={ExamplesStacks} />
                <Drawer.Screen name="Animations" component={Animations} />
                <Drawer.Screen name="About" component={AboutScreen} />
                <Drawer.Screen name="Tabs" component={Tabs} />
                <Drawer.Screen name="Todos" component={TodosScreen} />
                <Drawer.Screen name="Transforms" component={Transforms} />
              </>
            ) : null}
          </Drawer.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    );
  } else {
    return <AppLoading startAsync={getFonts} onFinish={() => setFonts(true)} />;
  }
};

const mapStateToProps = (state) => {
  return {
    loggedIn: true,
  };
};

export default connect(mapStateToProps)(AppNavigator);
