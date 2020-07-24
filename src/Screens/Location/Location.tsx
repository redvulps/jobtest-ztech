import React from "react";
import { View, ActivityIndicator } from "react-native";
import {
  useNavigation,
  useRoute,
  CommonActions,
} from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import Button, { ButtonColor } from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import Text from "../../Components/Text";
import {
  LocationCoords,
  fetchAddressFromCoordsInit,
} from "../../Redux/Location";
import { RootState } from "../../Redux/store";

import Styles from "./styles";
import AddressSearch from "../../Components/AddressSearch";
import resetNavigationTo from "../../Helpers/resetNavigationTo";

const Location: React.FC = () => {
  const [disabled, setDisabled] = React.useState(true);
  const [address, setAddress] = React.useState("");
  const [complement, setComplement] = React.useState("");

  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();

  const {
    address: geocodedAddress,
    fetchAddressFromCoordsLoading,
  } = useSelector((state: RootState) => state.locationState);

  const { lat, lng } = (route.params || {}) as any;

  const handleCancel = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      resetNavigationTo(navigation, "Home");
    }
  };

  const handleContinue = () => {
    navigation.navigate("Products");
  };

  const handleAddress = () => {
    navigation.navigate("Address");
  };

  React.useEffect(() => {
    if (lat && lng) {
      dispatch(fetchAddressFromCoordsInit({ lat, lng }));
    }
  }, [lat, lng]);

  React.useEffect(() => {
    if (geocodedAddress) {
      setAddress(
        `${geocodedAddress.street}, ${geocodedAddress.number} - ${geocodedAddress.zipcode}`
      );
    }

    setDisabled(
      !geocodedAddress?.street ||
        !geocodedAddress?.number ||
        !geocodedAddress?.zipcode
    );
  }, [geocodedAddress]);

  return (
    <View>
      {fetchAddressFromCoordsLoading ? (
        <ActivityIndicator style={Styles.loading} size="large" />
      ) : null}
      <TextInput
        onFocus={handleAddress}
        value={address}
        placeholder="Onde você quer receber seu pedido?"
        containerStyle={Styles.addressField}
      />
      <TextInput
        containerStyle={Styles.addressField}
        value={complement}
        placeholder="Complemento"
        onChange={(e) => setComplement(e.nativeEvent.text)}
      />
      <Text style={Styles.spacedText}>
        Num. Apartamento, Bloco, Casa, Refererência, deixe em branco se não
        houver
      </Text>
      {disabled ? (
        <Text style={Styles.spacedText}>
          Para continuar é necessário um endereço com número
        </Text>
      ) : null}
      <View style={Styles.buttonContainer}>
        <Button
          color={ButtonColor.Primary}
          disabled={disabled}
          onPress={handleContinue}
          style={Styles.continueButton}
        >
          Continuar
        </Button>
        <Button color={ButtonColor.Secondary} onPress={handleCancel}>
          Cancelar
        </Button>
      </View>
    </View>
  );
};

export default Location;
