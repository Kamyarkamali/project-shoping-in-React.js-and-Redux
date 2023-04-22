import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import {logger} from "redux-logger"

import rootreducer from './rootReducer';
import thunk from "redux-thunk" 

const store=createStore(rootreducer,(applyMiddleware(thunk)))

export default store