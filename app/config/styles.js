import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 20,
    color: colors.grey,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
