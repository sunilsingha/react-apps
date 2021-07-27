import React from "react";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

const ReduxDemo = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux</h1>
        <Link to="/">&lt;GO Home</Link>

        <App />
      </div>
    </Provider>
  );
};

export default ReduxDemo;
