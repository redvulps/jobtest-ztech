import React from "react";
import renderer from "react-test-renderer";

import TextInput from "../../src/Components/TextInput";

it("renders correctly", () => {
  const TextInputComponent = renderer.create(<TextInput />).toJSON();
  expect(TextInputComponent).toMatchSnapshot();
});
