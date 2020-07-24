import React from "react";
import {
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { StackHeaderProps } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash/debounce";

import { ThemeContext } from "../Theme";
import { searchSetKeyword } from "../../Redux/Search";
import { RootState } from "../../Redux/store";

import logo from "../../Assets/small-logo.png";

const Header: React.FC<StackHeaderProps> = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { address } = useSelector((state: RootState) => state.locationState);

  const handleAdressChange = () => {
    navigation.navigate("Location");
  };

  const debouncedChange = React.useCallback((e) => {
    debounce(() => {
      dispatch(searchSetKeyword(e.nativeEvent.text));
    }, 300)();
  }, []);

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    e.persist();
    debouncedChange(e);
  };

  return (
    <ThemeContext.Consumer>
      {(consumer) => (
        <View style={consumer.header?.container}>
          <View style={consumer.header?.addressBar?.container}>
            <Image source={logo} style={consumer.header?.addressBar?.image} />
            <View>
              <Text style={consumer.header?.addressBar?.text}>
                Receber agora em
              </Text>
              <TouchableOpacity onPress={handleAdressChange}>
                <Text style={consumer.header?.addressBar?.address}>
                  {address?.street}, {address?.number} {address?.complement}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={consumer.header?.searchBar?.container}>
            <TextInput
              style={consumer.header?.searchBar?.input}
              placeholder="Pesquise sua bebida favorita"
              onChange={handleChange}
              clearButtonMode="always"
            />
          </View>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

export default Header;
