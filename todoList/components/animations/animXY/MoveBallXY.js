import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";

export default function AnimXY() {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const initialPos = useState(
    new Animated.ValueXY({
      x: width / 2 - 50,
      y: 0,
    })
  )[0];

  const animDown = () => {
    Animated.timing(initialPos, {
      toValue: {
        x: width / 2 - 50,
        y: height - 250,
      },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const animUp = () => {
    Animated.timing(initialPos, {
      toValue: {
        x: width / 2 - 50,
        y: 0,
      },
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View>
      <TouchableOpacity
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <Button title="Anim Down" onPress={animDown} />
        <Button title="Anim Up" onPress={animUp} />
      </TouchableOpacity>
      <Animated.View style={initialPos.getLayout()}>
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "red",
          }}
        ></View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({});
