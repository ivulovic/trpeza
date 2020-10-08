import { StyleSheet } from 'react-native';

export default function createStyle() {
  return StyleSheet.create({
    // pageWrapper: {
    //   padding: 10,
    // },
    pageTitle: {
      fontSize: 24,
      fontWeight: "600",
    },
    homeHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      fontSize: 28,
    },
  })
}