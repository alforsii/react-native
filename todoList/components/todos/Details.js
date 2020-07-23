import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Details(props) {
  console.log("Details -> props", props);
  const { title, completed } = props.route.params;
  return (
    <View>
      <Text>Details page</Text>
      {/* <Button
        title="Go to HomePage"
        onPress={() => navigation.goBack()}
        // onPress={() => navigation.navigate("HomePage")}
      /> */}
      <Text> Title: {title} </Text>
      <Text> Completed: {completed ? "Yes" : "No"} </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
