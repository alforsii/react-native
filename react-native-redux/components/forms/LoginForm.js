import React, { useState } from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Input from "../Input";
import { formStyles } from "./styles";

export default function Form({ setOpenModal, handleLogin }) {
  const [user, setUser] = useState({ username: "", password: "" });
  return (
    <View style={formStyles.form}>
      <AntDesign
        style={formStyles.closeBtn}
        name="closecircleo"
        size={24}
        color="black"
        onPress={() => setOpenModal(false)}
      />
      <Text style={formStyles.title}>Login</Text>
      <Input
        placeholder="Username"
        onChangeText={(value) => setUser({ ...user, username: value })}
        value={user.username}
      />
      <Input
        placeholder="Password"
        onChangeText={(value) => setUser({ ...user, password: value })}
        password={user.password}
      />
      <View style={formStyles.loginBtnView}>
        <Text
          style={formStyles.text}
          onPress={() => {
            handleLogin(user);
            setOpenModal(false);
          }}
        >
          Login
        </Text>
      </View>
    </View>
  );
}
