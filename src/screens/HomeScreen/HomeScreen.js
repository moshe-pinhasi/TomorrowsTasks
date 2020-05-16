import React, {Component} from 'react'
import {View, Text} from 'react-native'

import {HeaderCmp} from '../../cmps/HeaderCmp'
import {Stepper} from '../../cmps/Stepper'
import {LayoutBody} from '../../cmps/LayoutBody'
import {UserPreview} from '../../cmps/UserPreview'

import {tasks} from '../../config/data'

class HomeScreen extends Component {

  state = {tasks}
  
  toggleDone = (step) => {
    const index = this.state.tasks.findIndex(s => step._id === s._id)
    if (index === -1) return
    this.state.tasks[index].isDone = !step.isDone
    this.setState({tasks: this.state.tasks})
  }

  render(){
    return (
      <>
        <HeaderCmp>
          <View >
            <UserPreview />
          </View>
        </HeaderCmp>
        <LayoutBody>
        <Stepper 
          tasks={this.state.tasks} 
          title={"Today's Tasks"}
          onItemPress={this.toggleDone} />
        </LayoutBody>
      </>
    )
  }
}

export default HomeScreen