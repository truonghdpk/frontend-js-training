import {combineReducers} from "redux-immutable";
import {connectRouter} from "connected-react-router";
import mainReducer from "./main-reducer";

export default history =>
    combineReducers({
        router: connectRouter(history),
        mainReducer
    });
