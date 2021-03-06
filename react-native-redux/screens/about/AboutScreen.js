import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import Header from "../../components/Header";
import PixelRation from "../../components/pixelRatio/PixelRatio";
import { globalStyles } from "../../global/styles/globalStyles";
import FocusedStatusBar from "../../components/FocusedStatusBar";

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView>
      <FocusedStatusBar barStyle="dark-content" />
      <Header navigation={navigation} title="About" />
      <Text style={globalStyles.text}>About me...</Text>
      <PixelRation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
