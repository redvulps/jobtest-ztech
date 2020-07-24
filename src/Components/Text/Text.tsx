import React from "react";
import { Text as NativeText, TextProps } from "react-native";

import { ThemeContext } from "../Theme";

const Text: React.FC<TextProps> = (props: TextProps) => (
  <ThemeContext.Consumer>
    {(consumer) => (
      <NativeText {...props} style={[consumer.text, props.style]} />
    )}
  </ThemeContext.Consumer>
)

export default Text;
