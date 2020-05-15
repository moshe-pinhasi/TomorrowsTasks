import React from 'react'
import {View, Text} from 'react-native'
// import { SafeAreaView } from 'react-native-safe-area-context';

import {HeaderCmp} from '../../cmps/HeaderCmp'
// import {BodyCmp} from '../../cmps/BodyCmp'
import {Stepper} from '../../cmps/Stepper'

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
        <Stepper tasks={tasks} title={"Today's Tasks"} />
      </>
    );
  }

export default HomeScreen