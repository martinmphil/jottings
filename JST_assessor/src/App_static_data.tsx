import React, { useState } from "react";
import "./App.css";
import { SampleAnswerPapers } from "./SampleAnswerPapers";

const App: React.FC = () => {
  //
  //
  // TO REMOVE
  // sample answers
  const sampleMarkingScheme = {
    examId: 1,
    correctAnswers: [
      { q: 1, best: 1, worst: 4 },

      { q: 2, best: 3, worst: 2 },

      { q: 3, best: 4, worst: 1 },

      { q: 4, best: 2, worst: 4 }
    ]
  };

  interface IQuestionResult {
    qScore: number;
    a: string;
    b: string;
    c: string;
    d: string;
    time: string;
    ip: string;
  }
  interface IResultRow {
    totalScore: number;
    percentage: number;
    name: string;
    email: string;
    candidateId: number;
    candidateAnswers: Array<IQuestionResult>;
  }

  const [examId, setExamId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingError, setLoadingError] = useState(false);
  const [csvReady, setCsvReady] = useState(false);
  const [outOf, setOutOf] = useState(0);
  const [examReport, setExamReport] = useState<IResultRow[]>([
    {
      totalScore: 0,
      percentage: 0,
      name: "",
      email: "",
      candidateId: 0,
      candidateAnswers: [
        { qScore: 0, a: "", b: "", c: "", d: "", time: "", ip: "" }
      ]
    }
  ]);
  const examNbrChange = (event: React.FormEvent<HTMLInputElement>) => {
    let x = parseInt(event.currentTarget.value);
    if (Number.isInteger(x)) {
      setExamId(x);
    }
  };

  // Fetch exam and mark, then set results state.
  const submitExamNbr = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Marking function takes 2 arguments, ie idealAnswer for that question and candidateAnswer.
    const markQuestion = (
      // idealAnswer in the form [{best:0,worst:0}, {best:0,worst:0}]
      idealAnswer: any,
      candidateAnswer: any = { best: 0, worst: 0, timestamp: "", ip: "" }
    ) => {
      const qResult: IQuestionResult = {
        qScore: 0,
        a: "",
        b: "",
        c: "",
        d: "",
        time: "",
        ip: ""
      };

      // Calculate and set candidate's score for this question.
      if (
        idealAnswer.best === candidateAnswer.best &&
        idealAnswer.worst === candidateAnswer.worst
      ) {
        qResult.qScore = 2;
      } else if (
        idealAnswer.best === candidateAnswer.best ||
        idealAnswer.worst === candidateAnswer.worst
      ) {
        qResult.qScore = 1;
      } else qResult.qScore = 0;

      // Array [1,2,3,4] mapped to strings for option results a, b, c & d
      // as either "1 Best", "1 Worst", "0 Best", "0 Worst" or na; for:
      // (i) Best option selected correctly
      // (ii) Worst option selected correctly
      // (iii) Best option selected incorrectly
      // (iv) Worst option selected incorrectly
      // (v) Not applicable or not answered (na)
      // NB scenarios where selecting worst option is not scored means markingScheme contains only {best:n}.
      const optionArray = [1, 2, 3, 4].map(x => {
        if (x === idealAnswer.best && x === candidateAnswer.best) {
          return "1";
        } else if (x === idealAnswer.worst && x === candidateAnswer.worst) {
          return "1";
        } else if (x === candidateAnswer.best && idealAnswer.best) {
          return "0";
        } else if (x === candidateAnswer.worst && idealAnswer.worst) {
          return "0";
        } else return "";
      });

      qResult.a = optionArray[0];
      qResult.b = optionArray[1];
      qResult.c = optionArray[2];
      qResult.d = optionArray[3];
      qResult.time = candidateAnswer.timestamp.substring(0, 19);
      qResult.ip = candidateAnswer.ip;

      return qResult;
      // End of markQuestion()
    };

    //
    //
    // Fetch markScheme and examResults from server with Promise.all().then
    //
    //
    //

    //   // Fetch Exam in Progress
    //   // Array of URLs for getting candidate's exam and current question from server.
    //   const urls: string[] = [
    //     `https://lanroth.com/sjt-backend/exams/${currentExamNbr}/`,
    //     `https://lanroth.com/sjt-backend/candidates/current-question/${currentExamNbr}/`,
    //     `https://lanroth.com/sjt-backend/candidates/${userIdToken}/`
    //   ];
    //   // Awaiting two promises (one for each URL) before proceeding.
    //   Promise.all(
    //     // Apply fetch to all URLs in our "urls" array.
    //     urls.map(url =>
    //       fetch(url, {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //           "candidate-token": userIdToken.toString()
    //         }
    //       })
    //         .then(response => {
    //           // Test for "ok" reponse from server
    //           if (!response.ok) {
    //             setLoadingError(true);
    //             setIsLoading(false);
    //           } else return response.json();
    //         })
    //         .catch(error => {
    //           setLoadingError(true);
    //           setIsLoading(false);
    //           console.error("Error:", error);
    //         })
    //     )
    //   )
    //     // The Promise.all then fufills to a 3-tuple array
    //     // [fetched_exam, fetched_q_nbr, candidate_name]
    //     .then(fetchedData => {
    //       setExamPaper(fetchedData[0].questions);
    //       setExamLength(fetchedData[0].questions.length);
    //       // NB question numbers on server-array index from zero not one
    //       setQuestionNumber(fetchedData[1].questionNum + 1);
    //       setCandidateName(fetchedData[2].name);
    //       if (
    //         // Test if candidate has already completed this exam.
    //         // Server indicates exam complete by returning current question === exam length
    //         // which is outside range given server-array indexes from zero not one
    //         fetchedData[1].questionNum + 1 >
    //         fetchedData[0].questions.length
    //       ) {
    //         setIsLoading(false);
    //         setShowQuestion(false);
    //         setShowOutro(true);
    //       } else if (
    //         // Test exam nbr, user id and exam text have been updated.
    //         currentExamNbr > 0 &&
    //         userIdToken > 0 &&
    //         fetchedData[0].questions.length > 0
    //       ) {
    //         setIsLoading(false);
    //         setShowQuestion(true);
    //       } else setLoadingError(true);
    //     })
    //     .catch(error => {
    //       setLoadingError(true);
    //       setIsLoading(false);
    //       console.error("Error:", error);
    //     });
    // }, []);

    //
    //
    //
    //
    //

    // check status
    if (false) {
      setLoadingError(true);
    } else {
      // TEMP change after establishing fetch
      const markingScheme = sampleMarkingScheme.correctAnswers;
      const answerPapers = SampleAnswerPapers;

      // Set entire exam report in one map function.
      setExamReport(
        answerPapers.map(x => {
          // Call markQuestion() on candidate's answer to every question.
          const questionResults = x.submission.answers.map((y, index) => {
            return markQuestion(markingScheme[index], y);
          });

          const finalTally = questionResults.reduce(
            (accumulator, currentValue) => accumulator + currentValue.qScore,
            0
          );

          const highestAvailableScore = markingScheme
            .map(x => {
              if (x.best && x.worst) {
                return 2;
              } else if (x.best || x.worst) {
                return 1;
              } else {
                return 0;
              }
            })
            .reduce(
              (accumulator: any, currentValue) => accumulator + currentValue,
              0
            );

          setOutOf(highestAvailableScore);

          const percent = Math.round(
            (finalTally / highestAvailableScore) * 100
          );

          return {
            totalScore: finalTally,
            percentage: percent,
            name: x.name,
            email: x.email,
            candidateId: x.id,
            candidateAnswers: questionResults
          };
        })
      );
    }

    setCsvReady(true);
    // end of submitExamNbr()
  };

  const downloadCsv = () => {
    if (examId === 0) {
      alert("Please enter an exam number and press submit.");
    } else {
      setIsLoading(true);

      // Set the rightmost column headings for many questions
      // by processing just the first array element of the examReport.
      const qMarkSheetHead = examReport[0].candidateAnswers.map(
        (x: any, i: number) => {
          return `Q${i + 1}score,Q${i + 1}a,Q${i + 1}b,Q${i + 1}c,Q${i +
            1}d,Q${i + 1}timestamp,Q${i + 1}ip`;
        }
      );
      // Set all csv column headings for this exam.
      const csvColHead = `Score,Percentage,Name,E-mail,Candidate_id,${qMarkSheetHead}`;

      // Process examReport for csv.

      const csvRows = examReport.map(x => {
        return (
          [
            x.totalScore,
            x.percentage,
            x.name,
            x.email,
            x.candidateId,
            x.candidateAnswers.map(y => {
              return [y.qScore, y.a, y.b, y.c, y.d, y.time, y.ip];
            })
          ].join(",") + "\n"
        );
      });

      const csv = csvColHead.concat(`\n`, csvRows.join(""));

      const dateNow = new Date();
      const a = document.createElement("a");
      a.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
      a.target = "_blank";
      a.download = `exam_${examId}_(marks_out_of_${outOf})_${dateNow
        .toISOString()
        .substring(0, 10)}.csv`;
      a.click();
      setIsLoading(false);
      setCsvReady(true);
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
        <button
          onClick={() => downloadCsv()}
          id="downloadButton"
          disabled={!csvReady}
        >
          Download
        </button>
        full results csv file.
      </div>
      <h2>Summary</h2>

      {isLoading && <p>Loading...</p>}
      {loadingError && <p>Loading error.</p>}

      {csvReady && <p>Out of {outOf}</p>}

      {csvReady && (
        <table>
          <caption>Exam {examId} results</caption>
          <tbody>
            <tr>
              <th scope="col">Score</th>
              <th scope="col">Name</th>
              <th scope="col">E-mail</th>
            </tr>
            {examReport.map(x => {
              return (
                <tr key={x.candidateId.toString()}>
                  <td>{x.totalScore}</td>
                  <td>{x.name}</td>
                  <td>{x.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
