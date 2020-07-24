import React from "react";
import { View, TouchableOpacity } from "react-native";

import Text from "../../../Components/Text";
import { ThemeContext } from "../../../Components/Theme";

import Styles from "./styles";
import { FooterProps } from "./types";

const Footer: React.FC<FooterProps> = ({ onBackToTop }) => (
  <ThemeContext.Consumer>
    {(consumer) => (
      <View style={consumer.footer?.container}>
        <TouchableOpacity onPress={onBackToTop}>
          <Text style={consumer.footer?.text}>Voltar ao topo</Text>
        </TouchableOpacity>
        <View style={Styles.citiesContainer}>
          <Text style={[consumer.footer?.text, Styles.citiesHeader]}>
            Cidades atendidadas
          </Text>
          <Text style={consumer.footer?.text}>Curitiba</Text>
          <Text style={consumer.footer?.text}>Belo Horizonte</Text>
          <Text style={consumer.footer?.text}>Recife</Text>
          <Text style={consumer.footer?.text}>Rio de Janeiro</Text>
          <Text style={consumer.footer?.text}>São Paulo Capital</Text>
          <Text style={consumer.footer?.text}>São Paulo Interior</Text>
          <Text style={consumer.footer?.text}>São Paulo Litoral</Text>
        </View>
        <View style={Styles.termsAndPrivacy}>
          <TouchableOpacity>
            <Text style={consumer.footer?.text}>Termos de uso</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={consumer.footer?.text}>Política de Privacidade</Text>
          </TouchableOpacity>
        </View>
        <Text style={consumer.footer?.text}>
          © 2020 Zé Delivery - Todos os direitos reservados.
        </Text>
        <Text style={consumer.footer?.text}>BEBA COM MODERAÇÃO</Text>
      </View>
    )}
  </ThemeContext.Consumer>
);

export default Footer;
