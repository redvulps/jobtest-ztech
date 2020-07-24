import { CommonActions, NavigationProp } from "@react-navigation/native";

export default function (navigation: NavigationProp<any, any>, key: string) {
  navigation.dispatch((state) => {
    const routeIndex = state.routes.findIndex((r) => r.name !== key);

    return CommonActions.reset({
      ...state,
      index: 0,
      routes: [{ key, name: key }],
    });
  });
}
