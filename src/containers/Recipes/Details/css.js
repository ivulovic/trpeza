import { StyleSheet } from 'react-native';

export default function createStyle() {
  return StyleSheet.create({
    mainImage: {
      width: '100%',
      height: 200,
      resizeMode: "cover"
    },
    pageContent: {
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    title: {
      fontWeight: 'bold',
      color: "#222",
      lineHeight: 20,
    },
    ingredients: {
      marginVertical: 10,
      flexDirection: 'row',
      flexWrap: 'wrap',
    }
  })
}