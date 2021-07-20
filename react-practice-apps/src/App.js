import "./App.css";
import appCollection from "./AppCollection";
import AnApp from "./AnApp";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Calc from "./React-Apps/Calculator-app/Calc";

// what is needed
// a collection of react apps => we can hold the details in a separate file as array of objects.
// create a component ex: tile which will have project information.
// with the collection of apps in const var => use map function to return each app for the tile and display.
// add routes to each tile for linking it.

function App() {
  const AllApps = () =>
    appCollection.map((app) => (
      <div key={app.id} className="app">
        <AnApp app={app} />

        {/* <AnApp app={app} /> */}
      </div>
    ));

  return (
    <BrowserRouter>
      <div className="container">
        <h1>React based apps for practice </h1>

        <Route exact path="/Calc">
          <Calc />
        </Route>

        <Route exact path="/">
          <div className="all-apps">
            <AllApps />
          </div>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
