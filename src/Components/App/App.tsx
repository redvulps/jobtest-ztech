/* eslint-disable react/jsx-props-no-spreading */
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { setStatusBarHidden } from "expo-status-bar";
import { ApolloProvider } from "@apollo/client";

import { Provider } from "react-redux";
import { ThemeContextProvider } from "../Theme";
import HomeScreen from "../../Screens/Home";
import ProductsScreen from "../../Screens/Products";
import LocationScreen from "../../Screens/Location";
import AddressScreen from "../../Screens/Address";
import Header from "../Header";

import GraphQlClient from "../../Helpers/GraphQlClient";
import { store } from "../../Redux/store";

const Stack = createStackNavigator();

const App: React.FC = () => {
  React.useEffect(() => {
    setStatusBarHidden(true, "none");
  });

  return (
    <NavigationContainer>
      <ApolloProvider client={GraphQlClient}>
        <Provider store={store}>
          <ThemeContextProvider>
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={HomeScreen}
              />
              <Stack.Screen
                name="Products"
                options={{ header: (props) => <Header {...props} /> }}
                component={ProductsScreen}
              />
              <Stack.Screen
                name="Location"
                component={LocationScreen}
                options={{ headerTitle: "Localização" }}
              />
              <Stack.Screen
                name="Address"
                component={AddressScreen}
                options={{ headerTitle: "Procurar endereço" }}
              />
            </Stack.Navigator>
          </ThemeContextProvider>
        </Provider>
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;
