import  roorReducer  from './reducers/index'
import { createStore } from 'redux'

const store = createStore(roorReducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
