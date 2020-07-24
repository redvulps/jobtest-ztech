import React from "react";
import { TouchableOpacity, Text, Image, View } from "react-native";

import { ThemeContext } from "../Theme";
import Currency from "../Currency";

import { ProductProps } from "./types";

const Button: React.FC<ProductProps> = ({
  image,
  name,
  price,
  discountedPrice,
}) => (
  <ThemeContext.Consumer>
    {(consumer) => (
      <TouchableOpacity style={consumer.productListItem?.container}>
        <Image
          source={image}
          resizeMode="contain"
          style={consumer.productListItem?.image}
        />
        <View style={consumer.productListItem?.descriptions}>
          <Text style={consumer.productListItem?.name}>{name}</Text>
          <Currency
            style={[
              consumer.productListItem?.discountedPrice,
              { opacity: discountedPrice ? 1 : 0 },
            ]}
            value={price}
          />
          {price ? (
            <Currency style={consumer.productListItem?.price} value={price} />
          ) : null}
        </View>
      </TouchableOpacity>
    )}
  </ThemeContext.Consumer>
);

export default Button;
