import React from 'react';
import { View } from 'react-native';
import Card from 'components/Card';

import createStyle from './css';
import { demoProducts } from './helpers';

export default function ProductList({ category }) {
  const styles = createStyle();
  let list = [];
  switch (category) {
    default:
      if (category === 'all') {
        list = demoProducts;
      } else {
        list = demoProducts.filter(x => x.category === category);
      }
  }
  return <View style={styles.listWrapper}>
    {list.map((x, i) => <Card {...x} key={x.name} />)}
  </View>
}