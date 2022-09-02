import { combineReducers } from "redux";
import dataReducer from "./dataReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    dataReducer,
    authReducer

})

export default rootReducer