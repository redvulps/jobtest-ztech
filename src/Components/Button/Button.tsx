import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../Theme";
import { ButtonProps, ButtonColor } from "./types";

const Button: React.FC<ButtonProps> = (props) => {
  const cleanProps = { ...props };
  const { color = ButtonColor.Primary } = props;

  delete cleanProps.color;

  return (
    <ThemeContext.Consumer>
      {(consumer) => {
        const theme = consumer.button?.[color];

        return (
          <TouchableOpacity
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...cleanProps}
            style={[theme?.container, cleanProps.style]}
          >
            <Text style={theme?.text}>{props.children}</Text>
          </TouchableOpacity>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Button;
