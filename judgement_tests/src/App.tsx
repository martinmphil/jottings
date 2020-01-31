import React, { useState } from "react";
import "./App.css";
import Question from "./Question";
import SampleQuestionText from "./SampleQuestionText";

// const logo = require("./logo.svg") as string;

const App: React.FC = () => {
  const [best, setBest] = useState(0);

  const bestOpt1 = () => {
    setBest(1);
  };

  const bestOpt2 = () => {
    setBest(2);
  };

  const bestOpt3 = () => {
    setBest(3);
  };

  const bestOpt4 = () => {
    setBest(4);
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
      <p>q1B is: {best}</p>

      <Question
        scenarioText={SampleQuestionText.scenarioText}
        optText1={SampleQuestionText.optText1}
        optText2={SampleQuestionText.optText2}
        optText3={SampleQuestionText.optText3}
        optText4={SampleQuestionText.optText4}
        submitHandling={submitHandling}
        bestOpt1={bestOpt1}
        bestOpt2={bestOpt2}
        bestOpt3={bestOpt3}
        bestOpt4={bestOpt4}
      />

      <nav>Link home nav</nav>
    </div>
  );
};

export default App;
