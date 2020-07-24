import { TextProps } from "react-native";

export interface CurrencyProps extends TextProps {
  value?: number | string;
  decimalSeparator?: string;
}
