import React from 'react'
import { View, Text } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { connect } from 'react-redux'

const List = props => {
  return (
    <View>
      <Text>Test List</Text>
      <Text>{JSON.stringify(props.workouts, null, 2)}</Text>
    </View>
  )
}

const connector = connect(state => state)

export default connector(wrap(List))
