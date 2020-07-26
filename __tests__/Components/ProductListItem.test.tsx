import React from "react";
import renderer from "react-test-renderer";

import ProductListItem from "../../src/Components/ProductListItem";

it("renders correctly", () => {
  const fakeProductPros = {
    name: "Test Product",
    image: { uri: "http://via.placeholder.com/400" },
  };

  const ProductListItemComponent = renderer
    // eslint-disable-next-line react/jsx-props-no-spreading
    .create(<ProductListItem {...fakeProductPros} />)
    .toJSON();
  expect(ProductListItemComponent).toMatchSnapshot();
});
