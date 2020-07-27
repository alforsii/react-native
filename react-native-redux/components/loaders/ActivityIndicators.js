import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <View>
      <Text>Default</Text>
      <ActivityIndicator />
    </View>
    <View>
      <Text>Large</Text>
      <ActivityIndicator size="large" />
    </View>
    <View>
      <Text>Small colored</Text>
      <ActivityIndicator size="small" color="#0000ff" />
    </View>
    <View>
      <Text>Large colored</Text>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default App;
