import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/reducers";
import InputField from "./components/InputField";
import DisplayContent from "./components/DisplayContent";
import React from "react";
import DisplayMap from "./components/DisplayMap";
import DisplayGlobe from "./components/DisplayGlobe";
import "./tailwind.output.css";
import "./index.css";

let store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-fixed bg-gradient-to-b from-my-orange-300 to-my-orange-200">
      <div className="flex  bg-my-orange-100 w-5/6 rounded-my-radius h-my-height w-my-width border-8 border-solid border-dark my-shadow">
        <div className="flex-col flex-no-wrap h-full relative w-25r bg-dark rounded-my-radius-l h-full flex-shrink-0">
          <InputField />
          <DisplayContent />
        </div>

        <div className="w-full flex justify-center items-center">
          <DisplayMap />
          <DisplayGlobe />
        </div>
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
