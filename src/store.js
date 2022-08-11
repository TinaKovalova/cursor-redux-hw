import {combineReducers, createStore} from "redux";
import {postReducer} from './redux/postReducer'


const store = createStore(postReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;