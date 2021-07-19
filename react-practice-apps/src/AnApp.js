import React from "react";
import "./AnApp.css";

const AnApp = (props) => {
  const navigateTo = (link) => {};

  return (
    <div className="an-app" onClick={() => navigateTo(props.app.link)}>
      <h3>{props.app.title}</h3>
      <p>{props.app.description}</p>
      <p>{props.app.date}</p>
    </div>
  );
};

export default AnApp;
