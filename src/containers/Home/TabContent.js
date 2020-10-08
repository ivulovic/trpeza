import React from "react";
import { ScrollView } from 'react-native';

export default function TabContent(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white' }}>
      <>
        {props.children}
      </>
    </ScrollView>
  )
} 