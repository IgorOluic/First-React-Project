import React from "react";
import "../custom.css";

const DisplayContent = (props) => {
  if (!props.value) {
    return <div className="content-container"></div>;
  } else {
    return (
      <div className="content-container">
        <p className="content-paragraph">{props.value}</p>
      </div>
    );
  }
};

export default DisplayContent;
