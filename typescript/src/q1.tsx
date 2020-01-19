import React from "react";

const radioButtonAnswerStyle = { margin: "0.8em" };

const submitHandling = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert("you just pressed the submit button");
};

const Q1: React.FC = () => {
  return (
    <div>
      <h1>Question one</h1>
      <p>What is one plus one?</p>

      <form className="answerForm" onSubmit={submitHandling}>
        <ul>
          <li>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="user_name" />
          </li>
          <li>
            <label htmlFor="mail">E-mail:</label>
            <input type="email" id="mail" name="user_name" />
          </li>
          <li>
            <label htmlFor="msg">Message:</label>
            <textarea id="msg" name="user_message"></textarea>
          </li>
        </ul>
      </form>

      <hr></hr>
      <form className="answerForm" onSubmit={submitHandling}>
        <div>
          <input
            style={radioButtonAnswerStyle}
            type="radio"
            id="alpha"
            name="Q1Answer"
            value="2"
          />
          <label htmlFor="alpha">Two</label>
        </div>
        <div>
          <input
            style={radioButtonAnswerStyle}
            type="radio"
            id="beta"
            name="Q1Answer"
            value="3"
          />
          <label htmlFor="beta">Three</label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Q1;
