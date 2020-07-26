import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import Text from "../../src/Components/Text";

it("renders correctly", () => {
  const TextComponent = renderer.create(<Text />).toJSON();
  expect(TextComponent).toMatchSnapshot();
});
