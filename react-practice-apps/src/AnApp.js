import React from "react";
import "./AnApp.css";
import { useHistory } from "react-router-dom";

const AnApp = (props) => {
  const history = useHistory();

  const navigateTo = (link) => {
    history.push(link);
  };

  return (
    <div className="an-app" onClick={() => navigateTo(props.app.component)}>
      <h3>{props.app.title}</h3>
      <p>{props.app.description}</p>
      <p>{props.app.date}</p>
    </div>
  );
};

export default AnApp;
