import App from "./App";
import "./App.css";
import { connect } from "react-redux";
import {loadMessages} from "./actions";


function mapDispatchToProps(dispatch) {
  return {
    loadMessages() {
      dispatch(loadMessages());
    }
  };
}

export default connect(null,mapDispatchToProps)(App);
