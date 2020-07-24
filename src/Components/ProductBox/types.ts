import { ImageURISource } from "react-native";

export interface ProductProps {
  image: ImageURISource;
  price?: number;
  discountedPrice?: number;
  name: string;
}
