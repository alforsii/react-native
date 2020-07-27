import React, { useRef } from "react";
import { Animated, Text, View, Button } from "react-native";
import { mainStyles } from "./mainStyles";

const FadeAnim = () => {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={mainStyles.container}>
      <Animated.View
        style={[
          mainStyles.fadingContainer,
          {
            opacity: fadeAnim, // Bind opacity to animated value
          },
        ]}
      >
        <Text style={mainStyles.fadingText}>Fading View!</Text>
      </Animated.View>
      <View style={mainStyles.buttonRow}>
        <Button title="Fade In" onPress={fadeIn} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
    </View>
  );
};

export default FadeAnim;
