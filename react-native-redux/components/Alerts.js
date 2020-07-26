import React, { useState } from "react";
import { StyleSheet, Alert, View, Text, Button } from "react-native";

export default function Alerts() {
  const [name, setName] = useState("Ashraf");
  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Button
        onPress={() =>
          Alert.prompt("Update name", "", [
            { text: "Cancel" },
            { text: "Ok", onPress: (text) => setName(text) },
          ])
        }
        title="Update name"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
    margin: 20,
    backgroundColor: "pink",
    fontSize: 72,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
