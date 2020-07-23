import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import Header from "../Header";

export default function AboutScreen({ navigation }) {
  return (
    <SafeAreaView>
      <Header navigation={navigation} title="About" />
      <Text>AboutScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
