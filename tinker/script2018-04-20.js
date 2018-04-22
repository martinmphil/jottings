/*
console.log(buttons.length)
*/

// curry
multicurry = (n) => ( (m) => n*m)

triple = multicurry(3)

let a = triple(4)

const z = "output " + a

let buttons = document.querySelectorAll('button')

buttons[0].addEventListener('click', createPara)

function createPara() {
  let para = document.createElement('p')
  para.textContent = z
  document.body.appendChild(para)
}

console.log(z)
