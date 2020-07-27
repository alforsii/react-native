import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { CustomButton } from "../buttons/CustomButton";

const screens = ["FadeAnim", "AnimXY", "ResizeBall", "PanResponder", "Easing"];
export default function AnimationsList({ navigation }) {
  return (
    <ScrollView>
      {screens.map((name, i) => (
        <CustomButton
          key={i}
          title={name}
          onPress={() => navigation.navigate(name)}
          style={{
            /* some styles for button */
            alignItems: "flex-start",
          }}
          textStyle={{
            /* styles for button title */
            fontSize: 18,
            marginLeft: 20,
          }}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
