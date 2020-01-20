"use strict";
// Learning via JavaScript

// Candidates for a gradebook closure if private methods are required.
let q1Mark = 0;
let q2Mark = 0;
let q3Mark = 0;

// Question 1.
function handleQ1(userAnswer) {
  const q1Feedback = document.querySelector("#q1 .feedback");
  q1Feedback.textContent = markingQ1(userAnswer);
  if (q1Mark > 0) {
    q1Feedback.classList.add("correctAnswer");
  } else {
    q1Feedback.classList.remove("correctAnswer");
  }
}
function setQ1() {
  document.querySelector("#a1").addEventListener("input", e => handleQ1(e.target.value));
  // Set feedback to initially display instructions.
  document.querySelector("#q1 .feedback").textContent = markingQ1("");
}
function markingQ1(userAnswer) {
  if (/map/.test(userAnswer)) {
    q1Mark = 1;
    return 'Yes, "map" is the right answer. ✓';
  } else {
    q1Mark = 0;
    return "Please type your answer into the box above.";
  }
}
setQ1();

// Question 2.
function handleQ2(userAnswer) {
  const q2Feedback = document.querySelector("#q2 .feedback");
  q2Feedback.textContent = markingQ2(userAnswer);
  if (q2Mark > 0) {
    q2Feedback.classList.add("correctAnswer");
  } else {
    q2Feedback.classList.remove("correctAnswer");
  }
  document.querySelector("#filter001").setAttribute("disabled", "");
}
function setQ2() {
  document.querySelector("#filter001").addEventListener("change", e => handleQ2(e.target.value));
  document.querySelector("#filter001").value = "";
}
function markingQ2(userAnswer) {
  if (userAnswer === "yes") {
    q2Mark = 1;
    return "Yes, filtering keeps results returning true from their callback function. ✓";
  } else {
    q2Mark = 0;
    return "Incorrect; filtering does indeed keep results returning true from their callback function";
  }
}
setQ2();

// Question 3.
function handleQ3(userAnswer) {
  const q3Feedback = document.querySelector("#q3 .feedback");
  q3Feedback.textContent = markingQ3(userAnswer);
  if (q3Mark > 0) {
    q3Feedback.classList.add("correctAnswer");
  } else {
    q3Feedback.classList.remove("correctAnswer");
  }
  document.querySelector("#reduce001").setAttribute("disabled", "");
}
function setQ3() {
  document.querySelector("#reduce001").addEventListener("change", e => handleQ3(e.target.value));
  document.querySelector("#reduce001").value = "";
}
function markingQ3(userAnswer) {
  if (userAnswer === "yes") {
    q3Mark = 1;
    return "Yes ✓";
  } else {
    q3Mark = 0;
    return "Incorrect";
  }
}
setQ3();
