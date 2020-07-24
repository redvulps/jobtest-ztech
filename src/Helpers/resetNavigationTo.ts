import { CommonActions, NavigationProp } from "@react-navigation/native";

export default function (
  navigation: NavigationProp<any, any>,
  key: string
): void {
  navigation.dispatch((state) => {
    return CommonActions.reset({
      ...state,
      index: 0,
      routes: [{ key, name: key }],
    });
  });
}
