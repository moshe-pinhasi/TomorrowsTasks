import React, { Children } from 'react'
import {View, Text} from 'react-native'

import styles from './styles';

const LayoutBody = ({children}) => {
  return (
    <View style={styles.layoutBodyView}>
      {children}
    </View>
  );
}

export default LayoutBody