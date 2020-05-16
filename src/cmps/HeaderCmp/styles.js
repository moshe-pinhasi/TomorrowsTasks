
import {StyleSheet, Dimensions} from 'react-native'
import Colors from '../../config/colors'

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: Colors.primary,
    paddingTop: 80,
    paddingHorizontal: 10,
    height: window.width / 1.5,
  },
});

export default styles;