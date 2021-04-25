import React from "react";
import LottieView from "lottie-react-native";
import colors from "../config/colors";
import { View, StyleSheet } from "react-native";

export default function ActivityIndicator({ visible = false, size }) {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        style={{
          width: 90,
          height: 120,
          alignSelf: "center",
        }}
        size={size}
        autoPlay
        loop
        source={require("../assets/animations/40971-location-pin-jumping-animation-11.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: colors.white,
    opacity: 0.8,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    zIndex: 1,
  },
});
