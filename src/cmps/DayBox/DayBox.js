import React from 'react'
import {View, Text} from 'react-native'
import {getDayOfWeek, getDayOfMonth} from '../../helpers/dates';

import styles from './styles';

const DayBox = ({date}) => {
  return (
    <View style={styles.dayBoxView}>
      <Text style={styles.dayMonth}>{getDayOfMonth(date)}</Text>
      <Text style={styles.dayWeek}>{getDayOfWeek(date)}</Text>
    </View>
  );
}

export default DayBox