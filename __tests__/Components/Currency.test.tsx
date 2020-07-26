import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Currency from "../../src/Components/Currency";

it("renders correctly", () => {
  const CurrencyComponent = renderer.create(<Currency />).toJSON();
  expect(CurrencyComponent).toMatchSnapshot();
});
