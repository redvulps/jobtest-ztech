import { StyleSheet } from "react-native";
import { themeDefaults } from "../../../Components/Theme";

export default StyleSheet.create({
  container: {
    height: 300,
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  centeredText: {
    textAlign: "center",
    marginBottom: 15,
  },
  input: {},
  geolocationText: {
    color: themeDefaults.colors.primaryOnDarkBackground,
    textAlign: "center",
    marginTop: themeDefaults.gutter,
    fontWeight: "bold",
  },
});
