import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    // alignItems: 'center',
  },
  loginBtnView: {
    backgroundColor: "dodgerblue",
    padding: 10,
    marginBottom: 1,
    width: "80%",
  },
  form: {
    // flex: 1,
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
