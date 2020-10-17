import React from "react";
import { View } from 'react-native';

export default function PageContent(props) {
  return (
    <View style={{ backgroundColor: 'white', paddingHorizontal: 15 }}>
      <>
        {props.children}
      </>
    </View>
  )
} 