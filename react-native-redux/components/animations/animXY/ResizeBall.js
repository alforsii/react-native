import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Animated,
  TouchableOpacity,
  Button,
} from "react-native";

export default function AnimXY() {
  const value = useRef(new Animated.Value(100)).current;

  const increaseSize = () => {
    Animated.timing(value, {
      toValue: 200,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  const decreaseSize = () => {
    Animated.timing(value, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        style={{ flexDirection: "row", justifyContent: "center" }}
      >
        <Button title="IncreaseBallSize" onPress={increaseSize} />
        <Button title="DecreaseBallSize" onPress={decreaseSize} />
      </TouchableOpacity>

      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: "50%",
            backgroundColor: "red",
          },
          {
            width: value,
            height: value,
          },
        ]}
      ></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({});
