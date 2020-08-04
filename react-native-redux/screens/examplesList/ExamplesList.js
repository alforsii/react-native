import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { CustomButton } from "../../components/buttons/CustomButton";

const screens = [
  "FlatList Example",
  "SectionList Example",
  "StatusBar with Stacks",
  "StatusBar with Tabs",
  "Modal",
  "On refresh",
  "Activity Indicators",
  "App State Change example",
  "Linking Examples",
  "Scroll Top and Bottom Examples",
  "LoadMore when scroll down",
  "Switch",
  "Share",
  "DragAndDrop",
];
export default function ExamplesList({ navigation }) {
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
