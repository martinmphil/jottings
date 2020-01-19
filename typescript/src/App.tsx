import React from "react";
import "./App.css";
import Q1 from "./q1";
// const logo = require("./logo.svg") as string;
// import logo from './logo.svg';

const App: React.FC = () => {
  return (
    <div className="App">
      <header>Link home</header>
      <section>
        <Q1 />
        <figure>
          <span role="img" aria-label="1 beer plus 1 beer<">
            🍺 + 🍺 = 🍻
          </span>
          <figcaption>1 beer plus 1 beer</figcaption>
        </figure>
      </section>
      <nav>Link home</nav>
    </div>
  );
};

export default App;
