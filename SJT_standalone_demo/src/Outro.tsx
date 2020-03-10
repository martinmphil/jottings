import React from "react";

interface Props {
  score: number;
  outOf: number;
}

const Outro: React.FC<Props> = props => {
  return (
    <main>
      <p>Congratulations, you completed your test. </p>
      <p>
        Your scored {props.score} out of {props.outOf}.
      </p>
      <p>Thank you and goodbye.</p>
    </main>
  );
};

export default Outro;
