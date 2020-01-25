import React from "react";
import "./App.css";
import Q1 from "./q1";
// const logo = require("./logo.svg") as string;
// import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>Link home in header</header>
      <h1>Instructions</h1>
      <p>
        Please use one of the left hand buttons to pick your "best" (most
        effective) response, AND pick your "worst" (least effective) response by
        selecting one of the right hand buttons.
      </p>
      <p>After selecting your answers, please press the "submit" button.</p>

      <Q1 />

      <hr></hr>
      <nav>Link home nav</nav>
    </div>
  );
};

export default App;
