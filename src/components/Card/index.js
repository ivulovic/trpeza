import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import createStyle from './css';

export default function Card({ name, dateAdded, quantity, icon, categoryName }) {
  const styles = createStyle();
  return <TouchableOpacity style={styles.card} onLongPress={() => console.log("long press")}>
    <View style={styles.cardImage}>
      <Image style={styles.cardImageIcon} source={icon} />
    </View>
    <View style={styles.spaceBetween}>
      <View style={styles.verticalSpaceBetween}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardDatetime}>{dateAdded}</Text>
      </View>
      <View style={styles.verticalSpaceBetween}>
        <Text style={styles.cardQuantity}>{quantity}</Text>
        <Text style={styles.cardCategory}>{categoryName}</Text>
      </View>
    </View>
  </TouchableOpacity>
}