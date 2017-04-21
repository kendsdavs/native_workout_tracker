import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Constants } from 'expo'
import { Provider } from 'react-redux'
import store from './store'
import Form from './containers/form'
import NativeTachyons from 'react-native-style-tachyons'
NativeTachyons.build({ rem: 16 }, StyleSheet)

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Workout For Fun</Text>
        <Form />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
