import { StyleSheet } from 'react-native';

export default function createStyle() {
  return StyleSheet.create({
    list: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    item: {
      marginRight: 10,
      fontWeight: 'bold',
      color: '#CCC',
    },
    active: {
      color: "#222",
    },
    icon: {
      width: 20,
      height: 20,
      marginRight: 10,
      // tintColor: '#4ad295'
    }
  })
}
//https://www.iconfinder.com/icons/6646079/essentials_options_sliders_ui_icon