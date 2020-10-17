import React from "react";
import { ScrollView } from 'react-native';

export default function PageWrapper(props) {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <>
        {props.children}
      </>
    </ScrollView>
  )
} 