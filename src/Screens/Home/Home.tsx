import React from "react";
import { View, ScrollView, ScrollViewComponent } from "react-native";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import HeroWithSearch from "./HeroWithSearch";
import Products from "./Products";
import Footer from "./Footer";

import Styles from "./styles";

const Home: React.FC = () => {
  const scrollRef = React.createRef<ScrollView>();
  const handleBackToTop = () => {
    scrollRef.current?.scrollTo({ x: 0, y: 0, animated: true });
  };

  return (
    <View style={Styles.container}>
      <Header />
      <ScrollView ref={scrollRef} style={Styles.homeContainer}>
        <HeroWithSearch />
        <HowItWorks />
        <Products />
        <Footer onBackToTop={handleBackToTop} />
      </ScrollView>
    </View>
  );
};

export default Home;
