import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Constants } from 'expo'
import { Provider } from 'react-redux'
import store from './store'
import NativeTachyons from 'react-native-style-tachyons'
import { NativeRouter, Route } from 'react-router-native'
import Form from './containers/form'
import List from './containers/list'

NativeTachyons.build({ rem: 16 }, StyleSheet)

class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Route exact path="/" component={Form} />
          <Route path="/workouts" component={List} />
        </View>
      </NativeRouter>
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
