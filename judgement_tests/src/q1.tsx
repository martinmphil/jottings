import React from "react";

const submitHandling = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("you just pressed the submit button");
};

const Q1: React.FC = () => {
  return (
    <section>
      <hr></hr>

      <h1>Question one</h1>
      <p>
        You have recently taken a call from a customer, praising the helpful
        service offered by a colleague in your team. Do you:
      </p>

      <hr />
      <button type="button">Best</button>
      <span>
        | Tell your colleague about the feedback on a one-to-one basis |
      </span>
      <button type="button">Worst</button>
      <hr />

      <form className="answerForm" onSubmit={submitHandling}>
        <fieldset>
          <legend>Q1 answer choices</legend>

          <hr></hr>

          <ul>
            <li>
              <input type="radio" id="alpha" name="Q1Answer" value="2" />
              <label htmlFor="alpha">
                1. Tell your colleague about the feedback on a one-to-one basis
              </label>
            </li>

            <hr></hr>

            <li>
              <input type="radio" id="beta" name="Q1Answer" value="3" />
              <label htmlFor="beta">
                2. Inform your team leader and let them give the praise
                personally
              </label>
            </li>

            <hr></hr>

            <li>
              <input type="radio" id="gamma" name="Q1Answer" value="3" />
              <label htmlFor="gamma">
                3. Wait until the team meeting tomorrow and announce the
                feedback to everyone
              </label>
            </li>

            <hr></hr>

            <li>
              <input type="radio" id="delta" name="Q1Answer" value="3" />
              <label htmlFor="delta">
                4. Email the whole company so that everyone hears about the
                great feedback
              </label>
            </li>
          </ul>

          <hr></hr>
        </fieldset>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Q1;
