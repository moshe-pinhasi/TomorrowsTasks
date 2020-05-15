
import {StyleSheet} from 'react-native'
import Colors from '../../config/colors'


const styles = StyleSheet.create({
  taskListItemView: {
      flexDirection: 'column',
      // height: 100,
  },
  row: {
    // backgroundColor: Colors.secondery,
    flexDirection: 'row',
    // paddingHorizontal: 15,
    // marginBottom: 20,
    // overflow: "hidden",
    // borderLeftWidth: 10,
    // borderLeftColor: Colors.primary,
  },
  checkbox: {
    // alignSelf: 'flex-end',
    // alignItems: 'center',
    justifyContent: "center",

  },
  text: {
    paddingLeft: 30,
    justifyContent: "center",
    // alignItems: 'center',
    fontSize: 20
  },
  // row: {
    
  //   paddingHorizontal: 15,
  //   paddingVertical: 8,
  // },
  // checkboxContainer: {
  //   justifyContent: 'flex-end',
  //   flexGrow: 1,
  // },
  
});

export default styles;

// export default StyleSheet.create({
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//   },
//   avatar: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     marginRight: 10,
//   },
//   name: {
//     fontSize: 16,
//     fontWeight: '500',
//     color: colors.primaryText,
//   },
//   email: {
//     fontSize: 13,
//     color: colors.subtleText,
//   },
//   separator: {},
//   chevronContainer: {
//     justifyContent: 'flex-end',
//     flexGrow: 1,
//   },
//   chevron: {
//     alignSelf: 'flex-end',
//   },
// });