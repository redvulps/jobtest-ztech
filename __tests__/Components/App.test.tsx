import "react-native";
import React from "react";
import renderer from "react-test-renderer";

import App from "../../src/Components/App";

beforeEach(() => {
  jest.useFakeTimers();
});

it("renders correctly", () => {
  renderer.create(<App />);
});
