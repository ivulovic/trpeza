import { StyleSheet } from 'react-native';

export default function createStyle(styles) {
  return StyleSheet.create({
    search: {
      borderRadius: 50,
      bottom: 25,
      zIndex: 1,
      backgroundColor: "#fff",
      marginHorizontal: '5%',
      elevation: 5,
      paddingHorizontal: 20,
    }
  })
}