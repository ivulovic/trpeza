import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import createStyle from './css';

export default function Ingredient(props) {
  const styles = createStyle();
  const { thumbnailStyle = {}, thumbnailInnerStyle = {}, imageStyle = {}, inactive } = props;
  const inactiveThumnailStyle = inactive ? styles.inactiveThumnail : styles.activeThumnail;
  const inactiveStyle = inactive ? styles.inactive : styles.active;
  return <View style={{ ...styles.thumbnail, ...thumbnailStyle }}>
    <View style={{
      ...styles.thumbnailInner,
      ...thumbnailInnerStyle,
      ...inactiveThumnailStyle
    }}>
      <Image style={{ ...styles.image, ...imageStyle, ...inactiveStyle }} source={props.image} />
      <Text style={{ ...styles.title, ...inactiveStyle }}>{props.title}</Text>
      {props.subtitle && <Text style={{ ...styles.subtitle, ...inactiveStyle }}>{props.subtitle}</Text>}
    </View>
  </View>
}