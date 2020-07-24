import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: 250,
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
  },
  image: {
    flex: 1,
  },
  centeredText: {
    textAlign: "center",
  },
});
