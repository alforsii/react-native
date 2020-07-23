import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
  SafeAreaView,
} from "react-native";

export default function ImageView() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.btns}>
        <Button title="Cancel" color="white" />
        <Button title="X" />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../images/chair.jpg")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  btns: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
