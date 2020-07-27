// Tabs and Drawer#
// If you're using a tab or drawer navigator,
// in the navigator might be rendered at once and kept rendered
// - that means that the last StatusBar config you set will be used
// (likely on the final tab of your tab navigator, not what the user is seeing).

// To fix this, we'll have to make the status bar component aware of screen focus
// and render it only when the screen is focused.
// We can achieve this by using the useIsFocused hook and creating a wrapper component:

import * as React from "react";
import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";

export default function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}
