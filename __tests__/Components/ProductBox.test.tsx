import React from "react";
import renderer from "react-test-renderer";

import ProductBox from "../../src/Components/ProductBox";

it("renders correctly", () => {
  const fakeProductPros = {
    name: "Test Product",
    image: { uri: "http://via.placeholder.com/400" },
  };

  const ProductBoxComponent = renderer
    // eslint-disable-next-line react/jsx-props-no-spreading
    .create(<ProductBox {...fakeProductPros} />)
    .toJSON();
  expect(ProductBoxComponent).toMatchSnapshot();
});
