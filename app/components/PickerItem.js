import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import AppText from "./AppText";
function PickerItem({ item, onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{item.label}</AppText>
      </TouchableOpacity>
    </View>
  );
}

export default PickerItem;
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});
