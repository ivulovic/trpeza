import { StyleSheet } from 'react-native';

export default function createStyle() {
  return StyleSheet.create({
    mainImage: {
      width: '100%',
      height: 250,
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
    },
    recipeInfo: {
      backgroundColor: 'white',
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    recipeName: {
      fontSize: 20,
      maxWidth: '80%',
      fontWeight: 'bold'
    },
    recipeInfoIcons: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    recipeInfoIcon: {
      width: 20,
      height: 20,
      paddingHorizontal: 20,
      resizeMode: 'contain',
    }
  })
}