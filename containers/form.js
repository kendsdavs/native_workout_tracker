import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Button
} from 'react-native'
import { connect } from 'react-redux'
import { pathOr } from 'ramda'
import { wrap } from 'react-native-style-tachyons'

const Form = props => {
  return (
    <View>
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingTop: 20
        }}>
        <Text cls="f1 b">Form</Text>
        <ScrollView cls="mb5">
          <View>
            <Text cls="f3 pr3">Date:</Text>
            <TextInput
              cls="w5 h3 ba ph2 br3"
              value={pathOr('', ['workout', 'date'], props)}
              onChangeText={value =>
                props.dispatch({ type: 'SET_DATE', payload: value })}
              placeholderTextColor="black"
              placeholder="date of workout"
              keyboardType="numeric"
            />
          </View>
          <View>
            <Text cls="f3 pr3">Push Ups:</Text>
            <TextInput
              cls="w5 h3 ba br3 ph2"
              value={pathOr('', ['workout', 'pushups'], props)}
              onChangeText={value =>
                props.dispatch({ type: 'SET_PUSHUPS', payload: value })}
              placeholderTextColor="black"
              placeholder="number of push ups"
              keyboardType="numeric"
            />
          </View>
          <View>
            <Text cls="f3 pr3 mt3">Sit Ups:</Text>
            <TextInput
              cls="w5 h3 ba br3 ph2"
              value={pathOr('', ['workout', 'situps'], props)}
              onChangeText={value =>
                props.dispatch({ type: 'SET_SITUPS', payload: value })}
              placeholderTextColor="black"
              placeholder="number of sit ups"
              keyboardType="numeric"
            />
          </View>
          <View>
            <Text cls="f3 pr3 mt3">Burpies:</Text>
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
          <View cls="pa3">
            <Button
              color="green"
              title="Submit"
              onPress={() => {
                props.dispatch({
                  type: 'SET_WORKOUTS',
                  payload: props.workout
                })
                props.dispatch({
                  type: 'CLEAR_FORM'
                })
                props.history.push('/workouts')
              }}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  )
}
const connector = connect(store => store)

export default connector(wrap(Form))
