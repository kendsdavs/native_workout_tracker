import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { wrap } from 'react-native-style-tachyons'
import { connect } from 'react-redux'

const List = props => {
  return (
    <View>
      <FlatList
        data={props.workouts}
        renderItem={({ item }) => (
          <Text cls="flx-row jcsb ass">
            <Text>{item.date}</Text>
            <Text>{item.pushups}</Text>
          </Text>
        )}
      />
    </View>
  )
}

const connector = connect(state => state)

export default connector(wrap(List))
