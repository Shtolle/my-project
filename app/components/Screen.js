import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.innerScreen, style]}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  innerScreen: {
    flex: 1,
    paddingHorizontal: 10,
  },
});
