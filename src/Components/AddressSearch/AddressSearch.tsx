import React from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import { useDispatch } from "react-redux";
import debounce from "lodash/debounce";

import TextInput from "../TextInput";
import { fetchSuggestionsFromQueryInit } from "../../Redux/Location";

import { AddressSearchProps } from "./types";

const AddressSearch: React.FC<AddressSearchProps> = ({
  value,
  placeholder,
}) => {
  const [address, setAddress] = React.useState(value);

  const dispatch = useDispatch();

  const debouncedChange = React.useCallback((e) => {
    debounce(() => {
      dispatch(fetchSuggestionsFromQueryInit(e.nativeEvent.text));
    }, 300)();
  }, []);

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    e.persist();

    debouncedChange(e);
    setAddress(e.nativeEvent.text);
  };

  React.useEffect(() => {
    setAddress(value);
  }, [value]);

  return (
    <TextInput
      autoFocus
      value={address}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default AddressSearch;
