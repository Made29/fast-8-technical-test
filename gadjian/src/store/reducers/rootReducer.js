import { combineReducers } from "redux";
import dataReducer from "./reducer";

const rootReducer = combineReducers({
    users: dataReducer,
});

export default rootReducer;
