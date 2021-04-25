import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../screens/AccountScreen";
import MessagesScreen from "../screens/MessagesScreen";
import routes from "./routes";

const Stack = createStackNavigator();
const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name={routes.ACCOUNT_SCREEN} component={AccountScreen} />
    <Stack.Screen name={routes.MESSAGES_SCREEN} component={MessagesScreen} />
  </Stack.Navigator>
);
export default AccountNavigator;
