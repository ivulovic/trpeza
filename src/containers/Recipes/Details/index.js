import React from 'react';
import { Image, View, Text } from 'react-native';
import createStyle from './css';
import Swipeable from 'components/Swipeable';
import SwipeableContent from 'components/Swipeable/SwipeableContent';
import Ingredients from './Ingredients';
import Preparation from './Preparation';

export default function RecipesDetailsPage() {
  const styles = createStyle()
  return (
    <View style={{ flex: 1, flexGrow: 1, }}>
      <Image source={require("images/temp/meal14.jpg")} style={styles.mainImage} />
      <Swipeable>
        <SwipeableContent label={"Sastojci"}>
          <Ingredients />
        </SwipeableContent>
        <SwipeableContent label={"Priprema"}>
          <Preparation />
        </SwipeableContent>
      </Swipeable>
    </View >
  );
}