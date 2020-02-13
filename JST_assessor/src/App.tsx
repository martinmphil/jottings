import React, { useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [examId, setExamId] = useState(0);

  const examNbrChange = (event: React.FormEvent<HTMLInputElement>) => {
    let x = parseInt(event.currentTarget.value);
    if (Number.isInteger(x)) {
      setExamId(x);
    }
  };

  const submitExamNbr = (event: React.FormEvent<HTMLFormElement>) => {
    alert("Exam id nbr is: " + examId);
    event.preventDefault();
  };

  const downloadHandler = () => {
    if (examId === 0) {
      alert("Please enter an exam number and press submit");
    } else {
      alert(`you pressed the downlaod button for exam ${examId}`);
    }
  };

  return (
    <div className="App">
      <h1>Assessor</h1>
      {/* react controlled component */}
      <form onSubmit={submitExamNbr}>
        <label htmlFor="exam">
          Exam id nbr:
          <input
            type="number"
            className="exam-number-input"
            id="exam"
            onChange={examNbrChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div>
        <button onClick={() => downloadHandler()} id="downloadButton">
          Download
        </button>
        full results csv file.
      </div>
      <h2>Results summary</h2>
      Loading...
    </div>
  );
};

export default App;
