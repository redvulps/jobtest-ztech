import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { AddressSearchResultProps } from "./types";
import { RootState } from "../../Redux/store";

import Styles from "./styles";
import { fetchAddressFromSuggestionInit } from "../../Redux/Location";
import Text from "../Text";

const AddressSearchResult: React.FC<AddressSearchResultProps> = ({
  onSelectAddress,
}) => {
  const { suggestions, fetchAddressFromSuggestionSuccess } = useSelector(
    (state: RootState) => state.locationState
  );
  const dispatch = useDispatch();

  const handleSelectAddress = (placeId: string) => {
    dispatch(fetchAddressFromSuggestionInit(placeId));
  };

  React.useEffect(() => {
    if (fetchAddressFromSuggestionSuccess) {
      onSelectAddress();
    }
  }, [fetchAddressFromSuggestionSuccess]);

  const suggestionList = suggestions.map((suggestion) => (
    <TouchableOpacity
      style={Styles.suggestionContainer}
      onPress={() => handleSelectAddress(suggestion.placeId)}
      key={suggestion.placeId}
    >
      <Text>{suggestion.description}</Text>
    </TouchableOpacity>
  ));

  return <View style={Styles.suggestionListContainer}>{suggestionList}</View>;
};

export default AddressSearchResult;
