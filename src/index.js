import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
import InputField from "./components/inputField";
import DisplayContent from "./components/displayContent";
import React from "react";
import "./custom.css";

let store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <div className="input-container">
      <InputField />
      <DisplayContent />
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
