import React from 'react'
import {View, Text} from 'react-native'

import {HeaderCmp} from '../../cmps/HeaderCmp'
import {Stepper} from '../../cmps/Stepper'
import {UserPreview} from '../../cmps/UserPreview'

import {tasks} from '../../config/data'

const HomeScreen = () => {
    return (
      <>
        <HeaderCmp>
          <View >
            <UserPreview />
          </View>
        </HeaderCmp>
        <Stepper tasks={tasks} title={"Today's Tasks"} />
      </>
    );
  }

export default HomeScreen