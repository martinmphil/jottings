import React from "react";
import "./App.css";
import Q1 from "./q1";
// const logo = require("./logo.svg") as string;
// import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>Link home header</header>

      <Q1 />

      <hr></hr>
      <nav>Link home nav</nav>
    </div>
  );
};

export default App;
