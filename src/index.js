import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
import InputField from "./components/inputField";
import DisplayContent from "./components/displayContent";
import React from "react";
import DisplayMap from "./components/displayMap";

let store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <div>
      <div className="input-container">
        <InputField />
      </div>
      <div>
        <DisplayMap />
        <DisplayContent />
      </div>
    </div>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
