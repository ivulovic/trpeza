import { StyleSheet } from 'react-native';

export default function createStyle() {
  return StyleSheet.create({
    thumbnail: {
      flexBasis: '25%',
      alignItems: 'center',
      marginVertical: 5,
    },
    thumbnailInner: {
      marginHorizontal: 5,
      alignItems: 'center',
      paddingVertical: 10,
      elevation: 4,
      borderRadius: 4,
      justifyContent: 'center',
      width: '90%',
      flex: 1,
    },
    image: {
      width: 40,
      height: 30,
      marginBottom: 10,
      resizeMode: "contain"
    },
    imageWrapper: {
      paddingHorizontal: 5,
    },
    title: {
      textAlign: 'center',
      color: "#222",
      fontWeight: 'bold',
      lineHeight: 18,
      fontSize: 13,
    },
    subtitle: {
      color: "gray",
      fontSize: 12,
      marginBottom: 10
    },
    inactive: {
      opacity: 0.5,
    },
    active: {
      opacity: 1,
    },
    inactiveThumnail: {
      backgroundColor: '#fdeded',
    },
    activeThumnail: {
      backgroundColor: 'white'
    }
  })
}