import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import createStyle from './css';

export default function Thumbnail(props) {
  const styles = createStyle();
  const { thumbnailStyle = {}, imageStyle = {} } = props;
  return <TouchableOpacity style={{ ...styles.thumbnail, ...thumbnailStyle }} onPress={props.onPress}>
    <Image style={{ ...styles.image, ...imageStyle }} source={props.image} />
    <View style={styles.details}>
      <View style={styles.footer}>
        <View style={styles.row}>
          <Image style={styles.icon} source={require('images/icons/content/clock.png')} />
          <Text style={styles.small}>30 min</Text>
        </View>
        <View style={styles.row}>
          <Image style={styles.icon} source={require('images/icons/content/heart.png')} />
          <Text style={styles.small}>250</Text>
        </View>

      </View>
      <Text style={styles.title}>Meksički takosi sa teletinom</Text>
    </View>
  </TouchableOpacity>
}