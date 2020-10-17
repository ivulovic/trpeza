import { StyleSheet } from 'react-native';

export default function createStyle() {
  return StyleSheet.create({
    image: {
      height: 200,
      width: '100%',
    },
    imageOverlay: {
      height: 200,
      width: '100%',
      paddingBottom: 15,
      position: 'absolute',
      top: 0,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.8)',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
    },
    small: {
      color: 'white',
      fontWeight: 'bold'
    },
    author: {
      color: '#CCC',
      paddingTop: 10,
    },
    center: {
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 32,
    },
  })
}