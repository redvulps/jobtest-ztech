import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Button from "../../src/Components/Button";

it("renders correctly", () => {
  const ButtonComponent = renderer.create(<Button />).toJSON();
  expect(ButtonComponent).toMatchSnapshot();
});
