import React, { Children } from 'react'
import {FlatList, View, Text} from 'react-native'
import {StepItem} from './StepItem'
import ProgressCircle from 'react-native-progress-circle'

import styles from './styles';
import Colors from '../../config/colors'

const Stepper = ({tasks, title, onItemPress, disabled}) => {

  const percentage = (tasks) => {
    const doneCount = tasks.filter(i => i.isDone).length
    return parseInt(doneCount * 100 / tasks.length)
  }

  return (
    <View style={styles.stepperView}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.progressContainer}>
          <View style={styles.progress}>
            <ProgressCircle
              percent={percentage(tasks)}
              radius={20}
              borderWidth={2}
              color={Colors.primary}
              shadowColor="#999"
              bgColor={Colors.white}>
              <Text style={{ fontSize: 12, color: Colors.primary }}>{percentage(tasks) + '%'}</Text>
            </ProgressCircle>
          </View>
        </View>
      </View>
      <FlatList
        style={styles.steps}
        data={tasks}
        renderItem={({ item, index }) =>
          <StepItem 
            task={item} 
            lastChild={index === tasks.length-1}
            onPress={() => onItemPress(item)}
            disabled={disabled}
            />
        }
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

export default Stepper