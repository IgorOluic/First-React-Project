import React from "react";
import "../tailwind.output.css";
import "../custom.css";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";

const InputField = (props) => {
  return (
    <div className="input-container">
      <input
        id="input-id"
        className="input-field"
        placeholder="Type a name here..."
      ></input>
      <button onClick={props.loadNameInfo} className="input-btn">
        Search
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadNameInfo: () => dispatch(actionCreators.loadName()),
  };
};

export default connect(null, mapDispatchToProps)(InputField);
