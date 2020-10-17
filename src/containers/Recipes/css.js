import { StyleSheet } from 'react-native';

export default function createStyle() {
  return StyleSheet.create({
    pageTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    thumbnails: {
      flexDirection: 'row',
      marginVertical: 25,
    },
    mediumThumbnails: {
      flexDirection: 'row',
      marginVertical: 25,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    mediumThumbnail: {
      flexBasis: '48%',
      marginRight: 0,
      marginBottom: 10,
    },
    mediumThumbnailImage: {
      width: '100%',
    },
    noRightMargin: {
      marginRight: 0,
    }
  })
}