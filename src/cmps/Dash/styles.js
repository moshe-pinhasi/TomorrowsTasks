
import {StyleSheet} from 'react-native'
import Colors from '../../config/colors'


const styles = StyleSheet.create({

  dashContainer: {
    flexDirection: 'column',
  },
  dash: {
    borderLeftWidth: 1,
    borderColor: Colors.green1,
    height: 1,
    marginBottom: 5,
  },
});

export default styles;