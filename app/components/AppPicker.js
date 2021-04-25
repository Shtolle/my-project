import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import Screen from "./Screen";
import defaultStyles from "../config/styles";
import PickerItem from "./PickerItem";
function AppPicker({
  items,
  numberOfColumns = 1,
  onSelectItem,
  PickerItemComponent = PickerItem,
  placeholder,
  selectedItem,
  width = "100%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [icon, setIcon] = useState("apps");
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.placeholder, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              color={defaultStyles.colors.medium}
              name={icon}
              style={styles.icon}
              size={30}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.text}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            color={defaultStyles.colors.medium}
            name="chevron-down"
            size={30}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen style={{ alignItems: "center" }}>
          <Button title="close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            numColumns={numberOfColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                  setIcon(item.icon);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

export default AppPicker;
const styles = StyleSheet.create({
  icon: {
    alignSelf: "center",
    marginRight: 10,
  },
  placeholder: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 25,
    marginVertical: 10,
    padding: 15,
    backgroundColor: defaultStyles.colors.lightgrey,
  },
  text: {
    flex: 1,
    color: defaultStyles.colors.grey,
  },
});
