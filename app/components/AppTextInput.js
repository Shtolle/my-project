import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/styles";
function AppTextInput({ icon, width = "100%", ...otherProps }) {
  const [name, setName] = useState("");
  return (
    <View style={[styles.placeholder, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          color={defaultStyles.colors.medium}
          name={icon}
          style={styles.icon}
          size={30}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
        value={name}
        onChange={(value) => setName(value.name)}
      />
    </View>
  );
}

export default AppTextInput;
const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    marginRight: 10,
  },
  placeholder: {
    height: 70,
    flexDirection: "row",
    borderRadius: 25,
    marginVertical: 10,
    padding: 15,
    backgroundColor: defaultStyles.colors.lightgrey,
  },
});
