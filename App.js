// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Dimensions, SafeAreaView } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";

import WelcomeScreen from "./components/WelcomeScreen";
import ImageView from "./components/ImageView";

export default function App() {
  const { landscape } = useDeviceOrientation();
  // console.log(Dimensions.get("screen"));
  console.log(useDimensions().screen.height);
  // console.log(useDeviceOrientation());
  return (
    <>
      {/* <SafeAreaView
        style={{
          height: landscape ? "30%" : "5%",
          backgroundColor: "dodgerblue",
        }}
      ></SafeAreaView>
      <WelcomeScreen /> */}
      <ImageView />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
