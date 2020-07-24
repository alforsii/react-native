import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Header from "../Header";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function AnimationsList({ navigation }) {
  return (
    <View>
      <Header navigation={navigation} title="Animations" />
      <TouchableOpacity onPress={() => navigation.navigate("FadeAnim")}>
        <Button title="FadeAmin" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("AnimXY")}>
        <Button title="AnimXy" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("ResizeBall")}>
        <Button title="ResizeBall" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("PanResponder")}>
        <Button title="PanResponder" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
