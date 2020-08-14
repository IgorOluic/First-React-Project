import ReactDOM from "react-dom";
import InputField from "./components/inputField";
import DisplayContent from "./components/displayContent";
import React, { useState } from "react";
import "./custom.css";

const App = () => {
  const [input, setInput] = useState("");

  return (
    <div className="input-container">
      <InputField onClick={(value) => setInput(value)} />
      <DisplayContent value={input} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
