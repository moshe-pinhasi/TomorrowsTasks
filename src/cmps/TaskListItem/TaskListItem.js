import React from 'react'
import {View, Text} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Dash} from '../Dash'

import styles from './styles';
import Colors from '../../config/colors'

const TaskListItem = ({task}) => {
  const icon = task.isDone ? 'ios-checkmark-circle' : 'ios-radio-button-off'
  const color = task.isDone ? Colors.primary : Colors.grey1

  return (
    <View style={styles.taskListItemView}>
      <View style={styles.row}>
        <Ionicons style={styles.checkbox} name={icon} size={30} color={color} />
        <Text style={styles.text}>{task.text}</Text>
      </View>
      <Dash dashGap={2} dashLength={10}/>
    </View>
  );
}

export default TaskListItem