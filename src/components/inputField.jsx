import React, { useState } from "react";
import "../tailwind.output.css";
import "../custom.css";

const InputField = (props) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <input
        id="input-id"
        className="input-field"
        placeholder="Type something here..."
        onChange={(event) => setInputValue(event.target.value)}
      ></input>
      <button onClick={() => props.onClick(inputValue)} className="input-btn">
        Search
      </button>
    </div>
  );
};

export default InputField;
