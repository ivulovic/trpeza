import { StyleSheet } from 'react-native';

export default function createStyle() {
  return StyleSheet.create({
    thumbnail: {
      width: 150,
      marginRight: 15,
    },
    image: {
      height: 150,
      width: 150,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 5,
      paddingVertical: 10,
      position: 'absolute',
      bottom: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    small: {
      color: 'white',
      fontWeight: 'bold'
    },
    title: {
      fontWeight: 'bold',
      color: "#222",
      paddingVertical: 5,
      lineHeight: 20,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    icon: {
      width: 16,
      height: 16,
      marginRight: 5,
      tintColor: 'white',
    }
  })
}