import { configReducer } from './reducers/configReducer'

import { combineReducers } from 'redux'
import { createStore } from 'redux'

const rootReducer = combineReducers({
    configState: configReducer,
})

export default function configureStore(preloadedState) {
    const store = createStore(rootReducer, preloadedState)
    return store
}