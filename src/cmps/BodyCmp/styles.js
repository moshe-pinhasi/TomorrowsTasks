
import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../config/colors'

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  bodyView: {
    backgroundColor: Colors.grey1,
    // position: fixed
    // padding: 10,
    height: window.height,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius: 30,
    // justifyContent: "center",
  },
  // headerTitle: {
  //   color: Colors.white,
  //   fontSize: 30,
  //   marginTop: -50
  // }
});

export default styles;