import React from "react";
import { View, ScrollView } from "react-native";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import HeroWithSearch from "./HeroWithSearch";
import Products from "./Products";
import Categories from "./Categories";

const Home: React.FC = () => (
  <View>
    <Header />
    <ScrollView>
      <HeroWithSearch />
      <HowItWorks />
      <Products />
      <Categories />
    </ScrollView>
  </View>
);

export default Home;
