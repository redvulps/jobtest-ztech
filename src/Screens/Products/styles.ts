import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  productListContainer: {
    flex: 1,
  },
  loading: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    marginTop: 20,
  },
  notFoundText: {
    margin: 20,
    textAlign: "center",
  },
});
