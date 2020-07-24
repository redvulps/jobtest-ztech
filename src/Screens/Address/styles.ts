import { StyleSheet } from "react-native";
import { themeDefaults } from "../../Components/Theme";

export default StyleSheet.create({
  container: {
    marginTop: themeDefaults.gutter,
    flex: 1,
  },
  suggestionsContainer: {
    paddingTop: themeDefaults.gutter,
    flex: 1,
  },
});
