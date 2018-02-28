import { connect } from "react-redux";
import Chat from "../components/Chat";
import {
  createMessage
} from "../actions";

function mapDispatchToProps(dispatch) {
  return {
    createMessage(message) {
      dispatch(createMessage(message));
    }
    
  };
}
function putStateInProps(state) {
  return {
    messages: state.messages
    
  };
}
export default connect(putStateInProps,mapDispatchToProps)(Chat);
