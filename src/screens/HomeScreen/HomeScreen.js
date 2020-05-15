import React from 'react'
import {View, Text} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

import {HeaderCmp} from '../../cmps/HeaderCmp'
import {BodyCmp} from '../../cmps/BodyCmp'
import {TasksList} from '../../cmps/TasksList'


import {tasks} from '../../config/data'

const HomeScreen = () => {
    return (
      <>
        <HeaderCmp>
          <View >
            <Text>Home!</Text>
          </View>
        </HeaderCmp>
        {/* <BodyCmp /> */}
        <TasksList tasks={tasks}/>
      </>
    );
  }

export default HomeScreen