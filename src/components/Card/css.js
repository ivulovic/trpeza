import { StyleSheet } from 'react-native';

export default function createStyle(styles) {
  return StyleSheet.create({
    card: {
      flexDirection: 'row',
      backgroundColor: 'white',
      marginBottom: 10,
      borderRadius: 4,
      elevation: 4,
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    cardImage: {
      marginRight: 15,
    },
    cardImageIcon: {
      resizeMode: 'contain',
      width: 24,
      height: 24,
      marginRight: 10,
    },
    cardTitle: {
      color: '#333',
      fontWeight: 'bold',
      marginBottom: 10,
    },
    cardDescription: {
      color: '#333',
      fontSize: 14,
    },
    cardQuantity: {
      color: '#222',
      textAlign: 'right',
      fontWeight: "bold",
      // fontSize: 16,
    },
    cardCategory: {
      color: '#AAA',
      fontWeight: "bold",
      fontSize: 12,
    },
    cardDatetime: {
      color: '#AAA',
      fontWeight: "bold",
      fontSize: 12,
    },
    spaceBetween: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textRight: {
      textAlign: 'right',
    },
    verticalSpaceBetween: {
      justifyContent: 'space-between',
    }
  })
}