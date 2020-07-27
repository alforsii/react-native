import * as React from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { useIsFocused } from "@react-navigation/native";

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

function Screen1({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#6a51ae" }]}>
      <FocusAwareStatusBar barStyle="light-content" backgroundColor="#6a51ae" />
      <Text style={{ color: "#fff" }}>Light Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate("Screen2")}
        color="#fff"
      />
    </SafeAreaView>
  );
}

function Screen2({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#ecf0f1" }]}>
      <FocusAwareStatusBar barStyle="dark-content" backgroundColor="#ecf0f1" />
      <Text>Dark Screen</Text>
      <Button
        title="Next screen"
        onPress={() => navigation.navigate("Screen1")}
      />
    </SafeAreaView>
  );
}
