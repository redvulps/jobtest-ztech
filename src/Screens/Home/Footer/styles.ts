import { StyleSheet } from "react-native";
import { themeDefaults } from "../../../Components/Theme";

export default StyleSheet.create({
  termsAndPrivacy: {
    borderTopColor: themeDefaults.colors.borderColor,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  citiesContainer: {
    borderTopColor: themeDefaults.colors.borderColor,
    borderTopWidth: 1,
  },
  citiesHeader: {
    fontWeight: "bold",
  },
});
