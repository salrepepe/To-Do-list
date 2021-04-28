import {createStore} from 'redux';
import {devToolsEnhancer} from "redux-devtools-extension/logOnlyInProduction";
import rootReducer from "./reducers";

const initState = {};
const store = createStore(rootReducer(), initState, devToolsEnhancer());

export default store;