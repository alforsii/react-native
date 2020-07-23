import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Button,
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  Alert,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function WelcomeScreen() {
  const handleLogin = () => console.log("button clicked");
  //   console.log(require("../images/background.jpg")); // returns a number
  return (
    <ImageBackground
      style={styles.background}
      source={require("../images/background.jpg")}
    >
      <SafeAreaView style={styles.container}>
        {/* using url for Image tag */}
        {/* <Image
          source={{
            uri: "https://source.unsplash.com/random",
            width: 200,
            height: 300,
          }}
        /> */}
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../images/logo-red.png")}
          />
          <Text onPress={handleLogin} style={styles.text} numberOfLines={1}>
            Click me loasnkjnk ajshjahsjajsj jahjsh ajhsja js as ajsj ajs ags
            agsagsjg ajsgjagsjga
          </Text>
        </View>
        <TouchableOpacity style={styles.loginBtnView}>
          <Button onPress={() => alert("pressed")} title="Login" color="#fff" />
        </TouchableOpacity>
        <View style={styles.loginBtnView}>
          <Button
            onPress={() =>
              Alert.alert("My title", "My message", [
                {
                  text: "old button",
                  onPress: () => console.log("NeOld button"),
                },
                {
                  text: "new button",
                  onPress: () => console.log("New button"),
                },
                { text: "cancel", onPress: () => console.log("Canceled") },
                { text: "Ok", onPress: () => console.log("Ok pressed") },
              ])
            }
            title="Register"
          />
        </View>
        <View style={styles.loginBtnView}>
          <Button
            color="#fff"
            onPress={() =>
              Alert.prompt("My title", "My message", (text) =>
                console.log(text)
              )
            }
            title="Signup"
          />
        </View>
        <View style={styles.loginBtnView}></View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    paddingBottom: 30,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  background: {
    flex: 1,
    // alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
  loginBtnView: {
    backgroundColor: "dodgerblue",
    padding: 10,
    marginBottom: 1,
    width: "100%",
  },
  text: {
    padding: 10,
    color: "blue",
    width: 200,
  },
});
