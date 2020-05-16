import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'
import {DayBox} from '../DayBox'

import styles from './styles';

const WeekPlan = ({days, onPress, selectedDate}) => {

  const renderBox = (day) => {
    return (
      <View  style={styles.dayBoxContainer} key={day}>
        <DayBox date={day} 
          isSelected={day === selectedDate}
          onPress={() => onPress(day)} 
        />
      </View>
    )
  }
  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.weekPlanView}>
        {days.map(day => renderBox(day))}
      </View>
    </ScrollView>
  )
}

export default WeekPlan