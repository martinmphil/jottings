import React, { useState } from "react";
import "./App.css";
import Question from "./Question";
import Outro from "./Outro";
import Instruct from "./Instruct";
import Progress from "./Progress";
import SampleExam from "./SampleData";

interface IBestWorstTuple {
  best: number;
  worst: number;
}

const App: React.FC = () => {
  const [showQuestion, setShowQuestion] = useState(true);
  const [showOutro, setShowOutro] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [best, setBest] = useState(-1);
  const [worst, setWorst] = useState(-1);
  const [score, setScore] = useState(0);

  const examLength = SampleExam.scenarios.length;

  const selectBest = (x: number) => {
    if (best === x) {
      setBest(-1);
    } else {
      setBest(x);
    }
  };

  const selectWorst = (x: number) => {
    if (worst === x) {
      setWorst(-1);
    } else {
      setWorst(x);
    }
  };

  const gradeScenarioSubmission = (
    idealAnswer: IBestWorstTuple,
    candidateSubmission: IBestWorstTuple
  ) => {
    if (
      candidateSubmission.best === idealAnswer.best &&
      candidateSubmission.worst === idealAnswer.worst
    ) {
      setScore(score + 2);
    } else if (candidateSubmission.best === idealAnswer.best) {
      setScore(score + 1);
    } else if (candidateSubmission.worst === idealAnswer.worst) {
      setScore(score + 1);
    }
  };

  const submitHandling = () => {
    if (best === -1 || worst === -1) {
      alert("You MUST select one 'Best' option AND one 'Worst' option");
    } else {
      let idealAnswer = {
        best: SampleExam.scenarios[questionNumber - 1].best,
        worst: SampleExam.scenarios[questionNumber - 1].worst
      };
      let candidateSubmission = { best, worst };
      gradeScenarioSubmission(idealAnswer, candidateSubmission);
      if (questionNumber < examLength) {
        setQuestionNumber(questionNumber + 1);
        setBest(-1);
        setWorst(-1);
      } else {
        setShowQuestion(false);
        setShowOutro(true);
      }
    }
  };

  return (
    <div className="App">
      {showQuestion && (
        <article>
          <Instruct />
          <Progress examLength={examLength} questionNumber={questionNumber} />
          <Question
            questionNumber={questionNumber}
            scenarioText={SampleExam.scenarios[questionNumber - 1]["situation"]}
            optTextA={SampleExam.scenarios[questionNumber - 1]["optionText"][0]}
            optTextB={SampleExam.scenarios[questionNumber - 1]["optionText"][1]}
            optTextC={SampleExam.scenarios[questionNumber - 1]["optionText"][2]}
            optTextD={SampleExam.scenarios[questionNumber - 1]["optionText"][3]}
            submitHandling={submitHandling}
            selectBest={selectBest}
            selectWorst={selectWorst}
            best={best}
            worst={worst}
          />
        </article>
      )}
      {showOutro && <Outro score={score} outOf={examLength * 2} />}
    </div>
  );
};

export default App;
