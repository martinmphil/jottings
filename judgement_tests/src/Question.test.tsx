import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Question from "./Question";
import SampleQuestionText from "./SampleQuestionText";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with question and answer text", () => {
  act(() => {
    render(
      <Question
        scenarioText={SampleQuestionText.scenarioText}
        optText1={SampleQuestionText.optText1}
        optText2={SampleQuestionText.optText2}
        optText3={SampleQuestionText.optText3}
        optText4={SampleQuestionText.optText4}
        submitHandling={jest.fn()}
        bestOpt1={jest.fn()}
      />,
      container
    );
  });
  expect(container.querySelector("#scenarioText").textContent).toBe(
    SampleQuestionText.scenarioText
  );
  expect(container.querySelector("#optText1").textContent).toBe(
    SampleQuestionText.optText1
  );
  expect(container.querySelector("#optText2").textContent).toBe(
    SampleQuestionText.optText2
  );
  expect(container.querySelector("#optText3").textContent).toBe(
    SampleQuestionText.optText3
  );
  expect(container.querySelector("#optText4").textContent).toBe(
    SampleQuestionText.optText4
  );
});
