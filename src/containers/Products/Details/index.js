import React from "react";
import { View, Text, Image } from 'react-native';
// import createStyle from "./css";

export default function ProductsDetailsPage() {
  // const { styles } = createStyle();
  return <View>
    <Image source={require("images/temp/cake1.jpg")} styles={styles.mainImage} />
  </View>
}