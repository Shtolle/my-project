import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function HeaderText({ children }) {
  return <Text>{children}</Text>;
}

export default HeaderText;

const styles = StyleSheet.create({
  text: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});
