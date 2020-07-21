import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

import Card from "./Card";
import Paragraph from "./Paragraph";
import Input from "./Input";

export const GameExercise = () => {
  const [number, setNumber] = useState("");
  const handleInput = (val) => {
    setNumber(val);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainContainer}>
        <SafeAreaView style={{ ...styles.title, ...styles.text }}>
          <Paragraph style={styles.text}> Guess a number </Paragraph>
        </SafeAreaView>
        <Paragraph>Start a new game!</Paragraph>
        <Card style={styles.container}>
          <Paragraph>Select a number</Paragraph>
          <Input
            autoCompletion={false}
            keyboardType="number-pad"
            maxLength={10}
            style={styles.input}
            onChangeText={handleInput}
            value={number}
          />
          <View style={styles.buttonsContainer}>
            <Button
              title="Reset"
              color="dodgerblue"
              onPress={() => setNumber("")}
            />
            <Button
              title="Confirm"
              color="dodgerblue"
              onPress={() =>
                number
                  ? Alert.alert(
                      "Result",
                      `Your number is ${parseInt(number)}`,
                      [{ text: "OK", onPress: () => setNumber("") }]
                    )
                  : null
              }
            />
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
  },
  mainContainer: {
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "dodgerblue",
  },
  title: { width: "100%", marginBottom: 5 },
  input: {
    textAlign: "center",
  },
});
export default GameExercise;
