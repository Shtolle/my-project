import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { View, StyleSheet } from "react-native";

import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "../navigation/AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import useNotifications from "../hooks/useNotifications";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useNotifications();

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.medium,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <MaterialCommunityIcons name="home" size={size} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name=" "
        showLabel={false}
        component={ListingEditScreen}
        options={{
          tabBarIcon: () => (
            <View style={styles.button}>
              <MaterialCommunityIcons
                name="plus-circle"
                size={50}
                color={colors.white}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <MaterialCommunityIcons name="human" size={size} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 90,
    backgroundColor: colors.primary,
    borderRadius: 45,
    borderWidth: 8,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
