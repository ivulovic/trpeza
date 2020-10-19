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
      <View style={styles.recipeInfo}>
        <Text style={styles.recipeName}>Makarone s povrćem i parmezanom</Text>
        <View style={styles.recipeInfoIcons}>
          <Image style={styles.recipeInfoIcon} source={require("images/icons/content/heart.png")} />
          <Image style={styles.recipeInfoIcon} source={require("images/icons/content/bookmark.png")} />
        </View>
      </View>
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