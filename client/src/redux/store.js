import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from 'redux-thunk';

import authReducer from './authReducer';
import postsReducer from './postsReducer';

const reducers = combineReducers({
   auth: authReducer,
   posts: postsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));

export default store;