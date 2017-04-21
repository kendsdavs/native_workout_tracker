import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'
import { wrap } from 'react-native-style-tachyons'

const Form = props => {
  return (
    <View>
      <Text cls="f1 b">Form</Text>
      <View>
        <Text cls="f3 pr3">Date:</Text>
      </View>
      <TextInput
        cls="w5 h3 ba br3 ph2"
        value={pathOr('', ['workout', 'date'], props)}
        onChangeText={value =>
          props.dispatch({ type: 'SET_DATE', payload: value })}
        placeholderTextColor="black"
        placeholder="date of workout"
        keyboardType="numeric"
      />
      <View>
        <Text cls="f3 pr3">Push Ups:</Text>
      </View>
      <TextInput
        cls="w5 h3 ba br3 ph2"
        value={pathOr('', ['workout', 'pushups'], props)}
        onChangeText={value =>
          props.dispatch({ type: 'SET_PUSHUPS', payload: value })}
        placeholderTextColor="black"
        placeholder="number of push ups"
        keyboardType="numeric"
      />
      <View>
        <Text cls="f3 pr3 mt3">Sit Ups:</Text>
      </View>
      <TextInput
        cls="w5 h3 ba br3 ph2"
        value={pathOr('', ['workout', 'situps'], props)}
        onChangeText={value =>
          props.dispatch({ type: 'SET_SITUPS', payload: value })}
        placeholderTextColor="black"
        placeholder="number of sit ups"
        keyboardType="numeric"
      />
      <View>
        <Text cls="f3 pr3 mt3">Burpies:</Text>
      </View>
      <TextInput
        cls="w5 h3 ba br3 ph2"
        value={pathOr('', ['workout', 'burpies'], props)}
        onChangeText={value =>
          props.dispatch({ type: 'SET_BURPIES', payload: value })}
        placeholderTextColor="black"
        placeholder="number of burpies"
        keyboardType="numeric"
      />
    </View>
  )
}
const connector = connect(store => store)

export default connector(wrap(Form))
