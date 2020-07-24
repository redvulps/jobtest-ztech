import React from "react";
import { View, Image } from "react-native";

import logo from "../../../Assets/small-logo-with-text.png";
import { ThemeContext } from "../../../Components/Theme";
import Styles from "./styles";

// TODO: Move styles
const Header = () => (
  <ThemeContext.Consumer>
    {(consumer) => (
      <View style={consumer.simpleHeader?.container}>
        <Image source={logo} resizeMode="contain" style={Styles.logo} />
      </View>
    )}
  </ThemeContext.Consumer>
);

export default Header;
