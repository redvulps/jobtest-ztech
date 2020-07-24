/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import Text from "../Text";
import { CurrencyProps } from "./types";

const Currency: React.FC<CurrencyProps> = (props) => {
  const { value, decimalSeparator = "," } = props;

  const cleanProps = { ...props };
  const currencyPrefix = "R$";

  delete cleanProps.value;
  delete cleanProps.decimalSeparator;

  if (value === undefined || value === null) {
    return <Text {...cleanProps}>{currencyPrefix} --,--</Text>;
  }

  const formattedValue = parseFloat(value.toString())
    .toFixed(2)
    .toString()
    .replace(".", decimalSeparator);

  return (
    <Text {...cleanProps}>
      {currencyPrefix} {formattedValue}
    </Text>
  );
};

export default Currency;
