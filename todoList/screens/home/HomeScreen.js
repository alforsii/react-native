import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import Header from "../Header";
import LoginModal from "../../components/forms/LoginModal";

export default function HomeScreen({ navigation }) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/background.jpg")}
      >
        <SafeAreaView></SafeAreaView>
        <Header navigation={navigation} title="HomeScreen" />
        <LoginModal />
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
