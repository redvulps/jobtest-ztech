import React from "react";
import { View, ScrollView } from "react-native";

import Text from "../../../Components/Text";
import ProductBox from "../../../Components/ProductBox";
import { ThemeContext } from "../../../Components/Theme";
import Styles from "./styles";

import productSkol from "../../../Assets/Screens/Home/skol-lata-269ml.png";
import productBrahma from "../../../Assets/Screens/Home/brahma-lata-350ml.png";
import productBudweiser from "../../../Assets/Screens/Home/budweiser-garrafa-330ml.png";
import productAntartica from "../../../Assets/Screens/Home/antarctica-garrafa-300ml.png";

const Products = () => (
  <ThemeContext.Consumer>
    {(consumer) => (
      <View>
        <Text style={[consumer.fonts?.heading, Styles.heading]}>
          Produtos que você encontra no Zé
        </Text>
        <ScrollView
          horizontal
          style={[consumer.productCategory?.container, Styles.productlist]}
        >
          <ProductBox name="Skol Lata 269ml" image={productSkol} />
          <ProductBox name="Brahma Lata 350ml" image={productBrahma} />
          <ProductBox name="Budweiser Garrafa 330ml" image={productBudweiser} />
          <ProductBox
            name="Antarctica Garrafa 300ml"
            image={productAntartica}
          />
        </ScrollView>
      </View>
    )}
  </ThemeContext.Consumer>
);

export default Products;
