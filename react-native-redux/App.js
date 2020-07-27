import "react-native-gesture-handler"; // <= DO NOT REMOVE or DO NOT MOVE DOWN - DO NOT TOUCH!
import * as React from "react";
// This is redux example

import { Provider } from "react-redux";
import { reduxStore } from "./auth_redux/store";
import AppNavigator from "./AppNavigator";

export const App = () => {
  return (
    <Provider store={reduxStore}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
