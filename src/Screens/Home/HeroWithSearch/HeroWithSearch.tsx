import React from "react";
import { View, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import TextInput from "../../../Components/TextInput";
import Text from "../../../Components/Text";

import Styles from "./styles";

import background from "../../../Assets/Screens/Home/hero-background.jpg";
import { ThemeContext } from "../../../Components/Theme";

const HeroWithSearch: React.FC = () => {
  const [location, setLocation] = React.useState<Location.LocationData>();
  const navigation = useNavigation();

  const getGeolocation = async () => {
    const { status } = await Location.requestPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Geo-localização",
        "Não foi possível obter sua localização atual, verifique se o GPS está ativo e se você nos permitiu acessar sua localização"
      );

      return;
    }

    setLocation(await Location.getCurrentPositionAsync());
  };

  const handleAddress = () => {
    navigation.navigate("Address");
  };

  React.useEffect(() => {
    if (location) {
      navigation.navigate("Location", {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    }
  });

  return (
    <ThemeContext.Consumer>
      {(consumer) => (
        <View style={Styles.container}>
          <ImageBackground
            style={Styles.background}
            source={background}
            resizeMode="cover"
          />
          <View>
            <Text style={[Styles.centeredText, consumer.fonts?.heading]}>
              Bebidas geladas a preço de mercado na sua casa agora
            </Text>
            <TextInput
              containerStyle={Styles.input}
              placeholder="Digite seu endereço com número e complemento"
              onFocus={handleAddress}
            />
            <TouchableOpacity onPress={getGeolocation}>
              <Text style={Styles.geolocationText}>
                Usar minha localização atual
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default HeroWithSearch;
