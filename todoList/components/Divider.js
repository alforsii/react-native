import React from "react";
import { StyleSheet, View } from "react-native";

export default function Divider({ style }) {
  return (
    <View>
      <View style={{ ...styles.divider, ...style }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
  },
});
