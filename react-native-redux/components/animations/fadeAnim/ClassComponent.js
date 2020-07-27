import React, { Component } from "react";
import { Animated, Text, View, Button } from "react-native";
import { mainStyles } from "./mainStyles";

class FadeAnim extends Component {
  // fadeAnim will be used as the value for opacity. Initial Value: 0
  state = {
    fadeAnim: new Animated.Value(1),
  };

  fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <View style={mainStyles.container}>
        <Animated.View
          style={[
            mainStyles.fadingContainer,
            {
              opacity: this.state.fadeAnim, // Bind opacity to animated value
            },
          ]}
        >
          <Text style={mainStyles.fadingText}>Fading View!</Text>
        </Animated.View>
        <View style={mainStyles.buttonRow}>
          <Button title="Fade In" onPress={this.fadeIn} />
          <Button title="Fade Out" onPress={this.fadeOut} />
        </View>
      </View>
    );
  }
}

export default FadeAnim;
