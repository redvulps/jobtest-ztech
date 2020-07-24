import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import { ThemeContext } from "../Theme";
import Currency from "../Currency";

import { ProductProps } from "./types";

const ProductBox: React.FC<ProductProps> = ({
  image,
  name,
  price,
  discountedPrice,
}) => (
  <ThemeContext.Consumer>
    {(consumer) => (
      <TouchableOpacity style={consumer.productBox?.container}>
        <Image
          source={image}
          resizeMode="contain"
          style={consumer.productBox?.image}
        />
        <View style={consumer.productBox?.descriptions}>
          <Text style={consumer.productBox?.name}>{name}</Text>
          {discountedPrice ? (
            <Currency
              style={consumer.productBox?.discountedPrice}
              value={discountedPrice}
            />
          ) : null}
          {price ? (
            <Currency style={consumer.productBox?.price} value={price} />
          ) : null}
        </View>
      </TouchableOpacity>
    )}
  </ThemeContext.Consumer>
);

export default ProductBox;
