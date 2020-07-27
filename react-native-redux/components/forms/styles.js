import { StyleSheet } from "react-native";

export const formStyles = StyleSheet.create({
  loginBtnView: {
    backgroundColor: "dodgerblue",
    padding: 10,
    marginBottom: 1,
    width: "80%",
  },
  closeBtn: {
    position: "absolute",
    top: 70,
    right: 20,
  },
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 5,
    elevation: 8,
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontFamily: "nunito-regular",
    fontSize: 24,
  },
  text: {
    textAlign: "center",
    color: "#fff",
    fontSize: 24,
  },
});
