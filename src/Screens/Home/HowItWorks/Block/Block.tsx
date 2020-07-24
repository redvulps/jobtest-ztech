import React from "react";
import { View, Image } from "react-native";

import { ThemeContext } from "../../../../Components/Theme";
import Text from "../../../../Components/Text";

import Styles from "./styles";
import { BlockProps } from "./types";

const Block: React.FC<BlockProps> = ({ image, heading, text }) => (
  <ThemeContext.Consumer>
    {(consumer) => (
      <View style={Styles.container}>
        <Image source={image} resizeMode="contain" style={Styles.image} />
        <View>
          <Text style={[Styles.centeredText, consumer.fonts?.heading]}>
            {heading}
          </Text>
          <Text style={Styles.centeredText}>{text}</Text>
        </View>
      </View>
    )}
  </ThemeContext.Consumer>
);

export default Block;
