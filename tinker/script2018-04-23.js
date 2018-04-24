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




// months of the year
//30 days has September, April, June and November.
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;

  var days = (choice === "February") ? 28
           : (choice === "September" ||
              choice === "April" ||
              choice === "June" ||
              choice === "November") ? 30
				     : 31;

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
