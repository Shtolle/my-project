import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
function Card({ imageUrl, title, onPress, subtitle }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardContainer}>
        <View style={styles.innerCard}>
          <Image source={{ uri: imageUrl }} style={styles.imgBox} />
          <View style={styles.textBox}>
            <AppText style={{ fontWeight: "bold" }}>{title}</AppText>
            <AppText style={{ color: "green" }}>{subtitle}</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: 250,
    margin: 20,
    marginTop: 50,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10.32,
    elevation: 16,
  },
  innerCard: {
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: colors.white,
  },
  imgBox: {
    width: "100%",
    height: 200,
    backgroundColor: colors.primary,
  },
  textBox: {
    width: "100%",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
