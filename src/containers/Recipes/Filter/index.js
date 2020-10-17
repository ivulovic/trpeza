import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Pressable } from 'react-native';
import createStyle from './css';

export default function Filter(props) {
  const styles = createStyle();
  const [active, setActive] = useState(['Domaća']);
  const handlePress = (item) => {
    let newItems = [];
    if (active.includes(item)) {
      newItems = active.filter(x => x !== item);
    } else {
      newItems = active.concat(item);
    }
    setActive(newItems);
  }
  const cuisines = ['Domaća', 'Vegeterijanska', 'Italijanska', 'Meksička', 'Kineska'];
  return <View style={styles.list}>
    <Image style={styles.icon} source={require("images/icons/content/filter.png")} />
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {cuisines.map(c => {
        const itemClass = active.includes(c) ? styles.active : {};
        return <Pressable key={c} onPress={() => handlePress(c)}>
          <Text style={{
            ...styles.item,
            ...itemClass,
          }}>{c}</Text>
        </Pressable>
      })}
    </ScrollView>
  </View>
}