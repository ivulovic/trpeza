import React from "react";
import { View, Text, Image } from 'react-native';
import createStyle from './css';

export default function Featured(props) {
  const styles = createStyle();
  return <View>
    <Image
      resizeMode="cover"
      style={{
        height: 200,
        width: '100%',
        opacity: 0.5,
      }}
      source={require("images/temp/featured.jpg")} />
    <View style={styles.imageOverlay}>
      <View style={styles.center}>
        <Text style={styles.title}>Beli kolač</Text>
        <Text style={styles.author}>pripremio Ivan Vulović</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.small}>30 min</Text>
        <Text style={styles.small}>Easy</Text>
        <Text style={styles.small}>257</Text>
      </View>
    </View>
  </View>
}