import { TouchableOpacityProps } from "react-native";
import { themeDefaults } from "../Theme";

export interface ButtonProps extends TouchableOpacityProps {
  color?: ButtonColor;
}

export enum ButtonColor {
  Primary = "primary",
  Secondary = "secondary",
}
