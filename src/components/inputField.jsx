import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/actions";
import { BsSearch } from "react-icons/bs";

const InputField = (props) => {
  const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
      props.loadNameInfo();
    }
  };

  return (
    <div className="relative ">
      <div className="bg-my-orange-100 h-20  w-28r mt-24  flex items-center ">
        <button
          onClick={props.loadNameInfo}
          className="ml-6 bg-white h-10 text-lg text-white w-10 rounded-l-full outline-none my-5 pl-3 py-2 text-dark focus:outline-none"
        >
          <BsSearch className="h-6 w-6" />
        </button>
        <input
          maxLength="14"
          onKeyDown={_handleKeyDown}
          autoComplete="off"
          id="search-input-id"
          className="my-5  w-48 h-10 text-lg  px-2 rounded-r-full  transition-all duration-500 hover:w-20r focus:w-20r focus:outline-none active:w-20r"
          placeholder="Type a name here..."
        ></input>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadNameInfo: () => dispatch(actionCreators.loadNameInfo()),
  };
};

export default connect(null, mapDispatchToProps)(InputField);
