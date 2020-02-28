import React, { useState } from "react";
import "./App.css";
import SampleDataForSJT from "./SampleData";

const App: React.FC = () => {
  const [examId, setExamId] = useState(1);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);

  const createExam = () => {
    setExamId(888);
    setIsLoading(false);
    setLoadingError(false);
    setQuestionNumber(1);
  };

  const createQuestion = () => {
    setQuestionNumber(11);
  };

  const examNbrChange = (event: React.FormEvent<HTMLInputElement>) => {
    let x = parseInt(event.currentTarget.value);
    if (Number.isInteger(x)) {
      setExamId(x);
    }
  };

  const submitExamNbr = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("you submitted an exam number");
    if (examId > 0) {
      setIsLoading(false);
    }
  };

  const questionNbrChange = (event: React.FormEvent<HTMLInputElement>) => {
    let x = parseInt(event.currentTarget.value);
    if (Number.isInteger(x)) {
      setQuestionNumber(x);
    }
  };

  const submitQuestionNbr = () => {
    // NB if exam fully loaded, then selecting question number could be reactive.
    alert("you submitted a question number");
  };

  const submitQuestion = () => {
    alert("processing your inputted text");
  };

  return (
    <div className="App">
      <h1>Author</h1>
      <button onClick={createExam}>Start new exam</button>
      {/* react controlled component */}
      <form onSubmit={submitExamNbr}>
        <label htmlFor="exam">
          Exam id nbr:
          <input
            type="number"
            className="number-input"
            id="exam"
            onChange={examNbrChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {isLoading && <p>Loading...</p>}
      {loadingError && (
        <p className="error-warning">
          Sadly we experienced a loading error. Please refresh this page, or try
          again later.
        </p>
      )}
      {!isLoading && (
        <main>
          <h2>Exam number {examId}</h2>
          {/* react controlled component */}
          <form onSubmit={submitQuestionNbr}>
            <label htmlFor="question-picker">
              Edit existing question number:
              <input
                type="number"
                className="number-input"
                id="question-picker"
                onChange={questionNbrChange}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <p>
            <button onClick={createQuestion}>Create new</button> question,
            scenario text and answer option.
          </p>
          <hr />
          <form onSubmit={submitQuestion}>
            <section>
              <h2>Question number {questionNumber}</h2>
              <label htmlFor="scenario-text">Scenario text</label>
              <br />
              <textarea
                name="scenario-text"
                id="scenario-text"
                cols={60}
                rows={10}
                defaultValue={SampleDataForSJT.questions[1].question}
              ></textarea>
            </section>
            <fieldset>
              <legend>Option texts</legend>

              <label htmlFor="optA">Option A</label>
              <br />
              <textarea
                name="scenario-text"
                id="optA"
                cols={60}
                rows={4}
                defaultValue={SampleDataForSJT.questions[1].answers[0]}
              ></textarea>
              <br />

              <label htmlFor="optB">Option B</label>
              <br />
              <textarea
                name="scenario-text"
                id="optB"
                cols={60}
                rows={4}
                defaultValue={SampleDataForSJT.questions[1].answers[1]}
              ></textarea>
              <br />

              <label htmlFor="optC">Option C</label>
              <br />
              <textarea
                name="scenario-text"
                id="optC"
                cols={60}
                rows={4}
                defaultValue={SampleDataForSJT.questions[1].answers[2]}
              ></textarea>
              <br />

              <label htmlFor="optD">Option D</label>
              <br />
              <textarea
                name="scenario-text"
                id="optD"
                cols={60}
                rows={4}
                defaultValue={SampleDataForSJT.questions[1].answers[3]}
              ></textarea>
            </fieldset>
            <input type="submit" value="Submit question" />
          </form>
        </main>
      )}
    </div>
  );
};

export default App;
