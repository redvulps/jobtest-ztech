import { StyleSheet } from "react-native";
import { themeDefaults } from "../Theme";

export default StyleSheet.create({
  suggestionContainer: {
    borderBottomColor: themeDefaults.colors.borderColor,
    borderBottomWidth: 1,
    paddingLeft: themeDefaults.gutter / 2,
    paddingRight: themeDefaults.gutter / 2,
    paddingTop: themeDefaults.gutter,
    paddingBottom: themeDefaults.gutter,
  },
  suggestionListContainer: {
    marginLeft: themeDefaults.gutter,
    marginRight: themeDefaults.gutter,
    backgroundColor: themeDefaults.colors.background,
    borderRadius: themeDefaults.gutter / 2,
  },
});
