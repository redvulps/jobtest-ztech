import React from "react";
import { ScrollView, View, Image, Dimensions } from "react-native";

import { ThemeContext } from "../../../Components/Theme";
import Text from "../../../Components/Text";

import Styles from "./styles";

import howItWorks1 from "../../../Assets/Screens/Home/how-it-works-01.png";
import howItWorks2 from "../../../Assets/Screens/Home/how-it-works-02.png";
import howItWorks3 from "../../../Assets/Screens/Home/how-it-works-03.png";
import Block from "./Block";

const { width } = Dimensions.get("window");

const HowItWorks = () => (
  <ThemeContext.Consumer>
    {(consumer) => (
      <View style={Styles.container}>
        <Text style={[Styles.centeredText, consumer.fonts?.heading]}>
          Como funciona o Zé Delivery?
        </Text>
        <ScrollView
          horizontal
          decelerationRate={0}
          snapToAlignment="end"
          snapToInterval={width}
        >
          <Block
            image={howItWorks1}
            heading="Onde você estiver"
            text="Achamos as bebidas geladinhas na sua área e levamos até você!"
          />
          <Block
            image={howItWorks2}
            heading="Só as favoritas"
            text="Você pode escolher entre cervejas, vinhos, água, energéticos,
                refrigerantes, salgadinhos e até gelo!"
          />
          <Block
            image={howItWorks3}
            heading="Facilita seu brinde"
            text="Suas bebidas chegam geladinhas e super rápidas, prontas para
                brindar!"
          />
        </ScrollView>
      </View>
    )}
  </ThemeContext.Consumer>
);

export default HowItWorks;
