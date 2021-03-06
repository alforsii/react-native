import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  text: {
    fontFamily: "nunito-regular",
    fontSize: 24,
    textAlign: "center",
  },
  alignCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "dodgerblue",
    fontSize: 16,
  },
  errorMessage: {
    color: "red",
  },
  flexRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
});
