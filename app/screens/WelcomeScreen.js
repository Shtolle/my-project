import React from "react";
import { ImageBackground, StyleSheet, Image, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import routes from "../navigation/routes";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 11 }}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={{ paddingTop: 10 }}>Sell what you need </Text>
        </View>
        <ImageBackground
          style={styles.background}
          source={require("../assets/background.jpg")}
          blurRadius={10}
        >
          <View style={styles.buttonsContainer}>
            <AppButton
              title="Login"
              color="primary"
              onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
            />
            <AppButton
              title="Register"
              color="secondary"
              onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}
            />
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
    alignSelf: "center",
    zIndex: 2,
  },
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
