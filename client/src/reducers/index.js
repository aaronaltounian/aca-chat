import {combineReducers} from "redux";

function messages(state = [], action) {
  if (action.type === "MESSAGES_LOADED") {
    return action.value;
  }
  return state;
}


const rootReducer = combineReducers({
  messages
});
export default rootReducer;
