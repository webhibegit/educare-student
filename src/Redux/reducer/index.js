import { combineReducers } from "redux";
import User from './User';
import BuidApp from "./BuidApp";
import Loader from "./Loader"
import PlayVideo from "./PlayVideo";
import SingleCourseData from "./SingleCourseData";
export default combineReducers({
   User,
   BuidApp,
   Loader,
   PlayVideo,
  SingleCourseData
})