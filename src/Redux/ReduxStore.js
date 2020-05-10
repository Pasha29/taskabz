import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import commonReducer from './commonReducer';

const reducers = combineReducers({
    common: commonReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;