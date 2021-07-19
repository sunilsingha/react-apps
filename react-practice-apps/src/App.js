import "./App.css";
import appCollection from "./AppCollection";
import AnApp from "./AnApp";

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
      </div>
    ));

  return (
    <div className="container">
      <h1>React based apps for practice </h1>
      <div className="all-apps">
        <AllApps />
      </div>
    </div>
  );
}

export default App;
