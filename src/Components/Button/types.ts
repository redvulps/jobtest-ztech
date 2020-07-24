import { TouchableOpacityProps } from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  color?: ButtonColor;
}

export enum ButtonColor {
  Primary = "primary",
  Secondary = "secondary",
}
