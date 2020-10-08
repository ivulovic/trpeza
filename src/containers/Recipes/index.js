import React from "react";
import { View, Text, Button } from 'react-native';

export default function RecipesPage(props) {
  return <View>
    <Text>
      Recipes page
    </Text>
    <Button title="Recipes/Details" onPress={() => props.navigation.navigate("Recipes/Details")} />
  </View>
}