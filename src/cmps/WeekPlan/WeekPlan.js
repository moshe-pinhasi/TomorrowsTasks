import React, {Component} from 'react'
import {View, ScrollView} from 'react-native'
import {DayBox} from '../DayBox'

import styles from './styles';

import {addDays} from '../../helpers/dates'

class WeekPlan extends Component {
  state = {
    selectedIdx: 0,
    days: [1,2,3,4],
    date: Date.now()
  }

  onPress = (i) => {
    this.setState({selectedIdx: i})
  }

  renderBox(i) {
    return (
      <View  style={styles.dayBoxContainer}>
        <DayBox date={addDays(this.state.date, i+1)} 
          isSelected={i === this.state.selectedIdx}
          onPress={() => this.onPress(i)}  
        />
      </View>
    )
  }
  
  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.weekPlanView}>
          {this.state.days.map((day, i) => this.renderBox(i))}
        </View>
      </ScrollView>
    )
  }
}

export default WeekPlan