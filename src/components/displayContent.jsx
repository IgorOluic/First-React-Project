import React from "react";
import "../custom.css";
import { connect } from "react-redux";

const DisplayContent = (props) => {
  if (props.name) {
    return (
      <div className="content-container">
        <p className="content-name">{props.name}</p>
        <p className="content-gender">Gender: {props.gender}</p>
        <p className="content-age">Average age: {props.age}</p>
        <p className="content-countries">Countries: {props.countries}</p>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
    gender: state.gender,
    age: state.age,
    countries: state.countries,
  };
};

export default connect(mapStateToProps)(DisplayContent);
