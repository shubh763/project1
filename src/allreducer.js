import { combineReducers } from "redux";
import MyBasic from "./basicreducer";
import MyContact from "./contactreducer";
import MyEdu from "./edureducer";
import MyExperience from "./expreducer";
import MyProject from "./projectreducer";
import MySkill from "./skillreducer";

const MainReducer = combineReducers({
    MyBasic,MyContact,MyEdu,MyExperience,MyProject,MySkill
})
export default MainReducer