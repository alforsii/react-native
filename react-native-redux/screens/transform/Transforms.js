import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import Header from "../../components/Header";
import Transforms from "../../components/transforms/Transforms";

export default function TransformsScreen({ navigation }) {
  return (
    <View>
      <SafeAreaView></SafeAreaView>
      <Header navigation={navigation} title="TransformsScreen" />
      <Transforms />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
