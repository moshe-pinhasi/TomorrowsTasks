import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {HeaderCmp} from '../../cmps/HeaderCmp'
import {WeekPlan} from '../../cmps/WeekPlan'
import {LayoutBody} from '../../cmps/LayoutBody'
import {Stepper} from '../../cmps/Stepper'

import {addDays, getMonthAndYearName, getDayOfWeek} from '../../helpers/dates'
import styles from './styles'

import {weekPlan} from '../../config/data'

class TasksListsScreen extends Component {

  state = {
    selectedDate: null,
    days: weekPlan.map((day, i) => ({...day, date: addDays(Date.now(), i+1)})),
    today: Date.now(),
    datesInWeek: [],
    currTasks: []
  }

  componentDidMount() {
    const datesInWeek = []
    this.state.days.forEach(item => datesInWeek.push(item.date))
    
    this.setState({
      datesInWeek, 
      selectedDate: datesInWeek[0], 
      currTasks: this.state.days[0].tasks
    })
  }

  onPress = (date) => {
    const day = this.state.days.find(day => day.date === date)
    if (!day) return

    this.setState({
      selectedDate: day.date,
      currTasks: day.tasks
    })
  }

  render() {
    return (
      <>
        <HeaderCmp>
          <View style={styles.title}>
            <Text style={styles.today}>{getMonthAndYearName(this.state.today)}</Text>
          </View>
          <WeekPlan 
            days={this.state.datesInWeek}
            selectedDate={this.state.selectedDate}
            onPress={this.onPress}
          />
        </HeaderCmp>
        <LayoutBody>
          <Stepper 
            tasks={this.state.currTasks}
            title={"Tasks"}
            disabled={true}/>
        </LayoutBody>
      </>
    )
  }
}

export default TasksListsScreen