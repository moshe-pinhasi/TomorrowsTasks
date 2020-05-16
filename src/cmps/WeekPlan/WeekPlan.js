import React from 'react'
import {View, ScrollView} from 'react-native'
import {DayBox} from '../DayBox'

import styles from './styles';

import {addDays} from '../../helpers/dates'
const WeekPlan = () => {
  let days = []
  let date = Date.now()
	for (let i = 0; i < 7; i++) {
		days.push(
			<View  style={styles.dayBoxContainer}>
        <DayBox date={addDays(date, i+1)} />
      </View>
		)
  }
  
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.weekPlanView}>
        {days}
      </View>
    </ScrollView>
  );
}

export default WeekPlan