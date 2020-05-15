import React from 'react'
import {View} from 'react-native'

import styles from './styles';

const HeaderCmp = (props) => {
  return (
    <View style={styles.headerView}>
      {props.children}
    </View>
  );
}

export default HeaderCmp