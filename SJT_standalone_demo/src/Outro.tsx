import React from "react";

interface Props {
  score: number;
  outOf: number;
}

const Outro: React.FC<Props> = (props) => {
  return (
    <main>
      <br />
      <p>Congratulations, you completed your test. </p>
      <p className="score-board">
        You achieved {props.score} out of {props.outOf}.
      </p>
      <p>Thank you and goodbye.</p>
    </main>
  );
};

export default Outro;
