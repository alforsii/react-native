import React from "react";
import { Text, View, TouchableOpacity, Linking, Button } from "react-native";
import * as ExpoLinking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

export class Anchor extends React.Component {
  _handlePress = () => {
    ExpoLinking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <TouchableOpacity {...this.props} onPress={this._handlePress}>
        <Text style={{ ...this.props.textStyles }}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

export default function LinkingExample() {
  const _handleOpenWithLinking = () => {
    Linking.openURL("https://google.com");
  };

  const _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync("https://facebook.com");
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Anchor
        textStyles={{ color: "blue", fontSize: 20 }}
        href="https://google.com"
      >
        Custom Expo Linking
      </Anchor>
      <Button
        title="Open URL with ReactNative.Linking"
        onPress={_handleOpenWithLinking}
      />
      <Button
        title="Open URL with Expo.WebBrowser"
        onPress={_handleOpenWithWebBrowser}
      />
    </View>
  );
}
