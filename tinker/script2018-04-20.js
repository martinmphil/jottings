/*
  1. Get references to all the buttons on the page and sort them in an array.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/

function createPara() {
  var para = document.createElement('p');
  para.textContent = 'you clicked';
  document.body.appendChild(para);
}

var buttons = document.querySelectorAll('button');

// Sanity check
console.log(buttons.length)

buttons[0].addEventListener('click', createPara);

for (var i = 1; i < buttons.length; i++) {
  buttons[i].addEventListener('click', createPara);
}
