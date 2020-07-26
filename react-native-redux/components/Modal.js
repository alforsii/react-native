import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function LoginModal({
  component: Component,
  title,
  titleStyle,
  ...rest
}) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <View style={styles.modal}>
      <TouchableOpacity
        style={styles.openBtn}
        onPress={() => setOpenModal(true)}
      >
        <Text
          style={{
            ...styles.link,
            ...titleStyle,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
      <Modal visible={openModal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Component {...rest} setOpenModal={setOpenModal} />
            <AntDesign
              style={styles.closeBtn}
              name="closecircleo"
              size={24}
              color="black"
              onPress={() => setOpenModal(false)}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    // alignItems: "center",
  },
  openBtn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 70,
    right: 20,
  },
  text: {
    fontSize: 24,
    padding: 5,
  },
  link: {
    color: "dodgerblue",
    fontSize: 18,
  },
});
