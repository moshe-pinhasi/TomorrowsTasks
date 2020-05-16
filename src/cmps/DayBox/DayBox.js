import React from 'react'
import {View, Text, TouchableHighlight} from 'react-native'
import {getDayOfWeek, getDayOfMonth} from '../../helpers/dates';
import Colors from '../../config/colors'

import styles from './styles';

const DayBox = ({date, onPress, isSelected}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      underlayColor={Colors.rowUnderlay}>
        <View style={[styles.dayBoxView, isSelected && styles.selectedBackground]}>
          <Text style={[styles.dayMonth, isSelected && styles.selectedText]}>{getDayOfMonth(date)}</Text>
          <Text style={[styles.dayWeek, , isSelected && styles.selectedText]}>{getDayOfWeek(date)}</Text>
        </View>
    </TouchableHighlight>
  );
}

export default DayBox