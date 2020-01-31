import React from "react";

interface Props {
  scenarioText: string;
  optText1: string;
  optText2: string;
  optText3: string;
  optText4: string;
  submitHandling: () => void;
  bestOpt1: () => void;
  bestOpt2: () => void;
  bestOpt3: () => void;
  bestOpt4: () => void;
}

const Question: React.FC<Props> = props => {
  return (
    <section>
      <hr />

      <h1>Question one</h1>
      <p id="scenarioText">{props.scenarioText}</p>

      <hr />

      <div id="answerOption1" className="answer-option">
        <button
          type="button"
          id="bestOpt1"
          className="answer-button best-button"
          aria-label="Option 1 is best"
          onClick={props.bestOpt1}
        >
          Best
        </button>
        <span id="optText1" className="option-text" aria-label="Option 1">
          {props.optText1}
        </span>
        <button
          type="button"
          id="worstOpt1"
          className="answer-button worst-button"
          aria-label="Option 1 is worst"
        >
          Worst
        </button>
      </div>

      <hr />

      <div id="answerOption2" className="answer-option">
        <button
          type="button"
          id="bestOpt2"
          className="answer-button best-button"
          aria-label="Option 2 is best"
          onClick={props.bestOpt2}
        >
          Best
        </button>
        <span id="optText2" className="option-text" aria-label="Option 2">
          {props.optText2}
        </span>
        <button
          type="button"
          id="worstOpt2"
          className="answer-button worst-button"
          aria-label="Option 2 is worst"
        >
          Worst
        </button>
      </div>

      <hr />

      <div id="answerOption3" className="answer-option">
        <button
          type="button"
          id="bestOpt3"
          className="answer-button best-button"
          aria-label="Option 3 is best"
          onClick={props.bestOpt4}
        >
          Best
        </button>
        <span id="optText3" className="option-text" aria-label="Option 3">
          {props.optText3}
        </span>
        <button
          type="button"
          id="worstOpt3"
          className="answer-button worst-button"
          aria-label="Option 3 is worst"
        >
          Worst
        </button>
      </div>

      <hr />

      <div id="answerOption4" className="answer-option">
        <button
          type="button"
          id="bestOpt4"
          className="answer-button best-button"
          aria-label="Option 4 is best"
          onClick={props.bestOpt4}
        >
          Best
        </button>
        <span id="optText4" className="option-text" aria-label="Option 4">
          {props.optText4}
        </span>
        <button
          type="button"
          id="worstOpt4"
          className="answer-button worst-button"
          aria-label="Option 4 is worst"
        >
          Worst
        </button>
      </div>
      <hr />

      <button type="submit" onClick={props.submitHandling}>
        Submit
      </button>
    </section>
  );
};

export default Question;
