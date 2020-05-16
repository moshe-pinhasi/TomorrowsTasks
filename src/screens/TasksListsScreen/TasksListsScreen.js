import React from 'react'
import {View, Text} from 'react-native'
import {HeaderCmp} from '../../cmps/HeaderCmp'
import {WeekPlan} from '../../cmps/WeekPlan'

import {getMonthAndYearName} from '../../helpers/dates'
import styles from './styles'

const TasksListsScreen = () => {
  const today = Date.now()
  return (
    <>
      <HeaderCmp>
        <View style={styles.title}>
          <Text style={styles.today}>{getMonthAndYearName(today)}</Text>
        </View>
        <WeekPlan />
      </HeaderCmp>
    </>
  );
}

export default TasksListsScreen