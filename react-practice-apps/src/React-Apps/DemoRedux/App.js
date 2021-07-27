import React from "react";
import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/ReduxDemo" component={ProductListing} />

          <Route
            exact
            path="/ReduxDemo/product/:productId"
            component={ProductDetail}
          />

          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
