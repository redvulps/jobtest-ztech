import React from "react";
import { ScrollView, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import AddressSearchResult from "../../Components/AddressSearchResult";
import AddressSearch from "../../Components/AddressSearch";
import resetNavigationTo from "../../Helpers/resetNavigationTo";

import Styles from "./styles";
import { sugesstionsReset } from "../../Redux/Location";

const Address: React.FC = () => {
  const navigation = useNavigation();
  const [wasReset, setWasReset] = React.useState(false);
  const dispatch = useDispatch();

  const handleSelectAddress = () => {
    if (wasReset) {
      resetNavigationTo(navigation, "Location");
    }
  };

  React.useEffect(() => {
    if (!wasReset) {
      dispatch(sugesstionsReset());
      setWasReset(true);
    }
  }, []);

  if (wasReset) {
    return (
      <View style={Styles.container}>
        <AddressSearch placeholder="Digite o endereço onde quer seus produtos" />
        <ScrollView style={Styles.suggestionsContainer}>
          <AddressSearchResult onSelectAddress={handleSelectAddress} />
        </ScrollView>
      </View>
    );
  }

  return null;
};

export default Address;
