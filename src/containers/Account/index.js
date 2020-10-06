import React from "react";
import { View, Text, Button } from 'react-native';

export default function AccountPage(props) {
  return <View>
    <Text>
      Account page
    </Text>
    <Button title="Account/Details" onPress={() => props.navigation.navigate("Account/Details")} />
  </View>
}