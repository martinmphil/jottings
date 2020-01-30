import React, { useState } from "react";
import "./App.css";
import Question from "./Question";
import SampleQuestionText from "./SampleQuestionText";

// const logo = require("./logo.svg") as string;

const App: React.FC = () => {
  const [q1B, setQ1B] = useState(0);

  const bestOpt1 = () => {
    setQ1B(1);
  };

  const submitHandling = () => {
    alert("you just pressed the submit button");
  };

  return (
    <div className="App">
      <header>Link home in header</header>
      <h1>Instructions</h1>
      <p>
        Please select one of the buttons on the left to pick your "best" (most
        effective) response, AND select one of the buttons on the right to pick
        your "worst" (least effective) response.
      </p>
      <p>After selecting your answers, press the "submit" button.</p>

      <p>TO REMOVE</p>
      <p>q1B is: {q1B}</p>

      <Question
        scenarioText={SampleQuestionText.scenarioText}
        optText1={SampleQuestionText.optText1}
        optText2={SampleQuestionText.optText2}
        optText3={SampleQuestionText.optText3}
        optText4={SampleQuestionText.optText4}
        submitHandling={submitHandling}
        bestOpt1={bestOpt1}
      />

      <nav>Link home nav</nav>
    </div>
  );
};

export default App;
