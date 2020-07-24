import { StyleSheet } from "react-native";
import { themeDefaults } from "../../Components/Theme";

export default StyleSheet.create({
  addressField: {
    marginTop: themeDefaults.gutter / 2,
  },
  spacedText: {
    marginLeft: themeDefaults.gutter,
    marginRight: themeDefaults.gutter,
  },
  buttonContainer: {
    marginTop: themeDefaults.gutter * 2,
  },
  loading: {
    zIndex: 1,
    position: "absolute",
    width: "100%",
    marginTop: themeDefaults.gutter,
  },
  continueButton: {
    marginBottom: themeDefaults.gutter,
  },
});
