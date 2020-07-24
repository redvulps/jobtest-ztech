/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { View, TextInput as NativeTextInput } from "react-native";

import { ThemeContext } from "../Theme";
import { TextInputProps } from "./types";

const TextInput: React.FC<TextInputProps> = (props) => (
  <ThemeContext.Consumer>
    {(consumer) => (
      <View style={[consumer.textInput?.container, props.containerStyle]}>
        <NativeTextInput {...props} />
      </View>
    )}
  </ThemeContext.Consumer>
);

export default TextInput;
