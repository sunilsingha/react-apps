import "./App.css";
import appCollection from "./AppCollection";
import AnApp from "./AnApp";
import { BrowserRouter, Route } from "react-router-dom";

import Calc from "./React-Apps/Calculator-app/Calc";
import Todolist from "./React-Apps/ToDolist-app/Todolist";
import WeatherApp from "./React-Apps/Weather-app/WeatherApp";
import GreaterIn3 from "./React-Apps/GreaterIn3/GreaterIn3";
import SobEob from "./React-Apps/SOB/SobEob";
import ReduxDemo from "./React-Apps/DemoRedux/ReduxDemo";

// what is needed
// a collection of react apps => we can hold the details in a separate file as array of objects.
// create a component ex: tile which will have project information.
// with the collection of apps in const var => use map function to return each app for the tile and display.
// add routes to each tile for linking it.

function App() {
  // use map to return AnApp Component for rendering
  const AllApps = () =>
    appCollection.map((app) => (
      <div key={app.id} className="app">
        <AnApp app={app} />
      </div>
    ));

  return (
    // Browser Router uses HTML5 history api to keep tack of urls
    <BrowserRouter>
      <div className="container">
        <h1>React based apps for practice </h1>

        {/* Route is used to show the Component based on the Path value */}
        <Route exact path="/Calc">
          <Calc />
        </Route>

        <Route exact path="/Todolist">
          <Todolist />
        </Route>

        <Route exact path="/WeatherApp">
          <WeatherApp />
        </Route>

        <Route exact path="/GreaterThan3">
          <GreaterIn3 />
        </Route>

        <Route exact path="/SobEob">
          <SobEob />
        </Route>

        <Route exact path="/ReduxDemo">
          <ReduxDemo />
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
