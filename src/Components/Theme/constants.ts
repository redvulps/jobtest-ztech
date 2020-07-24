/* eslint-disable import/prefer-default-export */
import { Dimensions } from "react-native";
import { ThemeConfigOptions } from "./types";

const gutter = 15;
const themeColors = {
  background: "#FFFFFF",
  backgroundDark: "#333333",
  primary: "rgb(51, 51, 51)",
  primaryOnDarkBackground: "#FFFFFF",
  secondary: "#999999",
  secondaryOnDarkBackground: "#FFC500",
  shadowColor: "#000000",
  borderColor: "rgb(243, 243, 243)",
};

export const themeDefaults: ThemeConfigOptions = {
  colors: themeColors,
  gutter,
  fonts: {
    heading: {
      fontSize: 24,
    },
  },
  text: {
    color: themeColors.primary,
  },
  button: {
    primary: {
      text: {
        color: themeColors.primary,
      },
      container: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.06)",
        backgroundColor: themeColors.secondaryOnDarkBackground,
        borderRadius: 50,
        marginLeft: gutter,
        marginRight: gutter,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: gutter,
        paddingRight: gutter,
      },
    },
    secondary: {
      text: {
        color: themeColors.primary,
      },
      container: {
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.06)",
        borderRadius: 50,
        marginLeft: gutter,
        marginRight: gutter,
        height: 48,
        alignItems: "center",
        justifyContent: "center",
        paddingLeft: gutter,
        paddingRight: gutter,
      },
    },
  },
  header: {
    container: {
      backgroundColor: themeColors.backgroundDark,
      flexDirection: "column",
    },
    addressBar: {
      container: {
        flexDirection: "row",
        marginLeft: gutter,
        marginRight: gutter,
        marginTop: gutter,
        alignItems: "center",
      },
      image: {
        width: 48,
        height: 48,
        marginRight: gutter,
      },
      text: {
        color: themeColors.primaryOnDarkBackground,
        fontWeight: "bold",
      },
      address: {
        color: themeColors.secondaryOnDarkBackground,
      },
    },
    searchBar: {
      container: {
        backgroundColor: themeColors.background,
        justifyContent: "space-around",
        flexDirection: "column",
        marginTop: gutter,
        marginBottom: gutter,
        marginLeft: gutter,
        marginRight: gutter,
        borderRadius: 5,
        height: 48,
        paddingLeft: gutter,
        paddingRight: gutter,
      },
      input: {
        color: themeColors.primary,
        flex: 1,
      },
    },
  },
  simpleHeader: {
    container: {
      backgroundColor: themeColors.backgroundDark,
      padding: gutter,
      alignItems: "center",
      justifyContent: "center",
    },
  },
  footer: {
    container: {
      backgroundColor: themeColors.backgroundDark,
    },
    text: {
      color: themeColors.primaryOnDarkBackground,
      marginTop: gutter,
      marginBottom: gutter,
      textAlign: "center",
    },
  },
  textInput: {
    container: {
      borderRadius: 5,
      backgroundColor: themeColors.background,
      paddingLeft: gutter / 2,
      paddingRight: gutter / 2,
      paddingTop: gutter / 4,
      paddingBottom: gutter / 4,
      marginLeft: gutter,
      marginRight: gutter,
    },
  },
  productBox: {
    container: {
      height: 300,
      width: Dimensions.get("screen").width * 0.6,
      backgroundColor: themeColors.background,
      borderRadius: gutter / 2,
      marginLeft: gutter,
      marginRight: gutter,
      shadowColor: themeColors.shadowColor,
      shadowRadius: 5,
      shadowOpacity: 1,
      elevation: 3,
      paddingTop: gutter,
    },
    descriptions: {
      borderTopWidth: 1,
      borderTopColor: themeColors.borderColor,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    },
    name: {
      color: themeColors.primary,
    },
    price: {
      color: themeColors.primary,
    },
    discountedPrice: {
      fontWeight: "bold",
      color: themeColors.secondary,
      textDecorationLine: "line-through",
    },
    image: {
      height: 200,
      width: "100%",
      marginBottom: gutter,
    },
  },
  productListItem: {
    container: {
      backgroundColor: themeColors.background,
      shadowRadius: 5,
      shadowOpacity: 1,
      elevation: 1,
      flexDirection: "row",
      marginLeft: gutter,
      marginRight: gutter,
      marginTop: gutter / 2,
      marginBottom: gutter / 2,
      padding: gutter / 2,
      alignItems: "center",
    },
    image: {
      height: 50,
      width: 50,
      marginRight: gutter,
    },
    price: {
      fontWeight: "bold",
    },
    discountedPrice: {
      fontWeight: "bold",
      color: themeColors.secondary,
      textDecorationLine: "line-through",
    },
  },
  productCategory: {
    container: {
      height: 400,
      backgroundColor: themeColors.background,
    },
  },
};
