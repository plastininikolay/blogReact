import { combineReducers } from "redux";
import ShortNews from "./ShortNews";
import DetailNews from "./DetailNews";

const rootReducer = combineReducers({ShortNews, DetailNews})

export default rootReducer;