import React from 'react';
import { View, Text } from 'react-native';
import icons from 'utils/foodIcons';
import createStyle from '../css';
import Ingredient from './Ingredient';
export default function Ingredients() {
  const styles = createStyle();
  return (
    <View style={styles.pageContent}>

      <Text style={styles.title}>Namirnice</Text>
      <View style={styles.ingredients}>
        <Ingredient image={icons.eggs} title="Jaja" inactive={true} />
        <Ingredient image={icons.bread} title="Hleb" />
        <Ingredient image={icons.butter} title="Puter" />
        <Ingredient image={icons["sunflower-oil"]} title="Suncokretovo ulje" inactive={true} />
        <Ingredient image={icons["olive-oil"]} title="Maslinovo ulje" />
        <Ingredient image={icons.ketchup} title="Kecap" />
        <Ingredient image={icons.mayonaisse} title="Majonez" inactive={true} />
      </View>

      <Text style={styles.title}>Meso</Text>
      <View style={styles.ingredients}>
        <Ingredient image={icons.beef} title="Junetina" />
      </View>

      <Text style={styles.title}>Povrce</Text>
      <View style={styles.ingredients}>
        <Ingredient image={icons.broccoli} title="Brokoli" inactive={true} />
        <Ingredient image={icons.garlic} title="Beli luk" />
        <Ingredient image={icons.onion} title="Crni luk" inactive={true} />
        <Ingredient image={icons.pepper} title="Paprika" />
      </View>
    </View>
  )
}