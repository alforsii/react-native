import React from "react";
import { connect } from "react-redux";
import { login, logout } from "../../auth_redux/actions/authActions";
import {
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

import Header from "../../components/Header";
import LoginModal from "../../components/forms/LoginModal";

export const HomeScreen = ({ navigation, login, logout, loggedIn }) => {
  const handleLogin = (user) => {
    login(user);
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/background.jpg")}
      >
        <SafeAreaView></SafeAreaView>
        <Header navigation={navigation} title="HomeScreen" />
        {loggedIn ? (
          <Button title="LOGOUT" onPress={logout} />
        ) : (
          <LoginModal handleLogin={handleLogin} />
        )}
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.authReducer.loggedIn,
});
const dispatchToProps = (dispatch) => ({
  login: (data) => dispatch(login(data)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, dispatchToProps)(HomeScreen);
const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
