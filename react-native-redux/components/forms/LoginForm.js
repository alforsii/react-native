import React from "react";
import { Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import Input from "../Input";
import { formStyles } from "./styles";

export default function Form({ setOpenModal }) {
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
      <Input placeholder="Username" />
      <Input placeholder="Password" />
      <View style={formStyles.loginBtnView}>
        <Text style={formStyles.text}>Login</Text>
      </View>
    </View>
  );
}
