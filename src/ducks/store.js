import reducer from './userReducer'
import {createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

export default createStore(reducer, composeWithDevTools())