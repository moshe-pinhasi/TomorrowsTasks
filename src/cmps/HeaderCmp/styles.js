
import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../config/colors'

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: Colors.primary,
    paddingVertical: 80,
    paddingHorizontal: 10,
    height: window.width / 1.5,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});

export default styles;