import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const width = Dimensions.get("screen").width;
export default function Header(props) {
  const { title, navigation } = props;
  return (
    <View style={styles.headerContainer}>
      <MaterialIcons
        style={{ ...styles.menuIcon }}
        onPress={() => navigation.openDrawer()}
        name="menu"
        size={30}
        color="white"
      />
      <View>
        <Text style={styles.title}> {title} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    width,
    padding: 8,
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    color: "#fff",
    fontFamily: "nunito-bold",
  },
  menuIcon: {
    position: "absolute",
    left: 16,
  },
});
