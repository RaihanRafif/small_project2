import { combineReducers, createStore } from 'redux'
import accountLogin from './buying/reducer'

const rootReducers = combineReducers({
        akunlogin : accountLogin,
    });

const store = createStore(rootReducers)

export { store }