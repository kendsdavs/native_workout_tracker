import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { set, lensProp, append } from 'ramda'

const initialWorkout = {
  date: '',
  pushups: '',
  situps: '',
  burpies: ''
}

const store = createStore(
  combineReducers({
    workout: (state = initialWorkout, action) => {
      switch (action.type) {
        case 'SET_DATE':
          console.log(action.payload)
          return set(lensProp('date'), action.payload, state)
        case 'SET_PUSHUPS':
          return set(lensProp('pushups'), action.payload, state)
        case 'SET_SITUPS':
          return set(lensProp('situps'), action.payload, state)
        case 'SET_BURPIES':
          return set(lensProp('burpies'), action.payload, state)
        case 'CLEAR_FORM':
          return {}
        default:
          return state
      }
    },
    workouts: (state = [], action) => {
      switch (action.type) {
        case 'SET_WORKOUTS':
          console.log(action.payload)
          console.log('state', state)
          return append(action.payload, state)
        default:
          return state
      }
    }
  }),
  applyMiddleware(thunk)
)

export default store
