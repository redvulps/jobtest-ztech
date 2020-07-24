import React from "react";
import { ActivityIndicator, View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import ProductListItem from "../../Components/ProductListItem";
import { useQueryProducts } from "../../Queries/Products";
import { RootState } from "../../Redux/store";

import Styles from "./styles";
import Text from "../../Components/Text";

const Products: React.FC = () => {
  const [products, setProducts] = React.useState();
  const { keyword } = useSelector((state: RootState) => state.searchState);
  const { loading, data, refetch } = useQueryProducts(532, "");
  const notFoundMessage =
    data?.poc?.products instanceof Array &&
    data?.poc?.products?.length === 0 ? (
      <Text style={Styles.notFoundText}>Não encontramos nenhum produto</Text>
    ) : null;

  React.useEffect(() => {
    if (data?.poc?.products) {
      setProducts(data?.poc?.products);
    }
  }, [data]);

  React.useEffect(() => {
    if (refetch) {
      refetch({ id: 532, search: keyword });
    }
  }, [keyword, refetch]);

  return (
    <View style={Styles.container}>
      {loading ? (
        <ActivityIndicator size="large" style={Styles.loading} />
      ) : null}
      {notFoundMessage}
      <FlatList
        style={Styles.productListContainer}
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <ProductListItem
              name={item.title}
              image={{ uri: item.images[0].url }}
              price={item.productVariants[0].price}
            />
          );
        }}
      />
    </View>
  );
};

export default Products;
