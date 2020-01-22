import React from "react";

const submitHandling = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("you just pressed the submit button");
};

const Q1: React.FC = () => {
  return (
    <section>
      <h1>Question one</h1>
      <p>What is one plus one?</p>

      <form className="answerForm" onSubmit={submitHandling}>
        <fieldset>
          <legend>Q1 answer choices</legend>

          <hr></hr>

          <ul>
            <li>
              <input type="radio" id="alpha" name="Q1Answer" value="2" />
              <label htmlFor="alpha">Two</label>
            </li>

            <hr></hr>

            <li>
              <input type="radio" id="beta" name="Q1Answer" value="3" />
              <label htmlFor="beta">Three</label>
            </li>

            <hr></hr>

            <li>
              <input type="radio" id="gamma" name="Q1Answer" value="4" />
              <label htmlFor="gamma">Four</label>
            </li>

            <hr></hr>

            <li>
              <input type="radio" id="delta" name="Q1Answer" value="5" />
              <label htmlFor="delta">Five</label>
            </li>
          </ul>

          <hr></hr>
        </fieldset>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <figure>
        <span role="img" aria-label="1 beer plus 1 beer<">
          🍺 + 🍺 = 🍻
        </span>
        <figcaption>1 beer plus 1 beer</figcaption>
      </figure>
    </section>
  );
};

export default Q1;
