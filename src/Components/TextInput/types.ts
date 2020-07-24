import {
  TextInputProps as NativeTextInputProps,
  StyleProp,
  ViewStyle,
} from "react-native";

export interface TextInputProps extends NativeTextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}
