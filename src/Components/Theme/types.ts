import { ViewStyle, StyleProp, TextStyle, ImageStyle } from "react-native";

export interface ThemeColorsConfig {
  primary: string;
  secondary: string;
  primaryOnDarkBackground: string;
  secondaryOnDarkBackground: string;
  background: string;
  backgroundDark: string;
  shadowColor: string;
  borderColor: string;
}

export interface ThemeConfigOptions {
  colors: ThemeColorsConfig;
  gutter: number;
  text: StyleProp<TextStyle>;
  fonts?: {
    heading?: StyleProp<TextStyle>;
  };
  button?: {
    primary?: {
      container?: StyleProp<ViewStyle>;
      text?: StyleProp<TextStyle>;
    };
    secondary?: {
      container?: StyleProp<ViewStyle>;
      text?: StyleProp<TextStyle>;
    };
  };
  header?: {
    container?: StyleProp<ViewStyle>;
    addressBar?: {
      image: StyleProp<ImageStyle>;
      container?: StyleProp<ViewStyle>;
      text?: StyleProp<TextStyle>;
      address?: StyleProp<TextStyle>;
    };
    searchBar?: {
      container?: StyleProp<ViewStyle>;
      input?: StyleProp<TextStyle>;
    };
  };
  simpleHeader: {
    container?: StyleProp<ViewStyle>;
  };
  productBox?: {
    container?: StyleProp<ViewStyle>;
    name?: StyleProp<TextStyle>;
    price?: StyleProp<TextStyle>;
    discountedPrice?: StyleProp<TextStyle>;
    image?: StyleProp<ImageStyle>;
    descriptions?: StyleProp<ViewStyle>;
  };
  productListItem: {
    container?: StyleProp<ViewStyle>;
    name?: StyleProp<TextStyle>;
    price?: StyleProp<TextStyle>;
    discountedPrice?: StyleProp<TextStyle>;
    image?: StyleProp<ImageStyle>;
    descriptions?: StyleProp<ViewStyle>;
  };
  productCategory?: {
    container?: StyleProp<ViewStyle>;
  };
  textInput?: {
    container?: StyleProp<ViewStyle>;
    input?: StyleProp<TextStyle>;
  };
}
