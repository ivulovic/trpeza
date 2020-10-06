import React from "react";
import { View, Text, Button } from 'react-native';

export default function HomePage(props) {
  return <View>
    <Text>
      Home page
    </Text>

    <Button title="Home/Details" onPress={() => props.navigation.navigate("Home/Details")} />
  </View>
}