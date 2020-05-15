import React from 'react'
import {FlatList} from 'react-native'
import {TaskListItem} from '../TaskListItem'

import styles from './styles';
const TasksList = ({tasks}) => {
  return (
    <FlatList
        style={styles.tasksListView}
        data={tasks}
        renderItem={({ item }) =>
          <TaskListItem task={item} />
        }
        keyExtractor={(item, index) => index}
      />
  );
}

export default TasksList