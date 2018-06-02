"use strict";
// [2]
function range_t(s) {
  return [...Array(s - 1).keys()].map(x => x + 2);
}

function calculate_odds(x) {
  return x.map(range_t);
}





function valid_us_them_predicate(x) {
  if (x > 0 && Number.isFinite(x)) {
    return true;
  }
}

// [1]
var e = (function () {
  var player_nbrs = 3;
  var max_player_nbrs = 6;
  var us = 10;
  var them = 10;
  var adv_us = 0;
  var adv_them = 0;
  var dice_available = [6, 8, 12]; // ADD 4, 12, 20, 100!!!!!!!
  var enc = {};
  enc.change_n = x => Number.isInteger(x) && x > 0 && x < max_player_nbrs ?
    player_nbrs = x : player_nbrs = player_nbrs;
  enc.change_us = x => valid_us_them_predicate(x) ? us = x : us = us;
  enc.change_them = x => valid_us_them_predicate(x) ? them = x : them = them;
  enc.change_adv_us = x => Number.isFinite(x) ? adv_us = x : adv_us = adv_us;
  enc.change_adv_them = x => Number.isFinite(x) ? adv_them = x : adv_them = adv_them;
  enc.get_n = () => player_nbrs;
  enc.get_state = () => [player_nbrs, us, them, adv_us,adv_them];
  enc.get_dice = () => dice_available;
  return enc;
}());

// work_in_progress
e.change_n(4);
e.change_us(-11);
e.change_them(12);
e.change_adv_us(1);
e.change_adv_them(0.75);
var theState = e.get_state();
console.log("outside after change_them to twelve " + theState);


function prepare_player_numbers_section() {
  document.querySelector('#pbttn' + e.get_n()).classList.remove('availBttn');
  document.querySelector('#pbttn' + e.get_n()).classList.add('pickedBttn');
  document.querySelectorAll('#pNbrs > input[type=button]').forEach( i => {
    i.addEventListener('click', () => {
      e.change_n(parseInt(i.value));
      document.querySelector(".pickedBttn").classList.add("availBttn");
      document.querySelector(".pickedBttn").classList.remove("pickedBttn");
      i.classList.remove('availBttn');
      i.classList.add('pickedBttn');
    });
  });
}
// prepare_us_and_them_section

// dice_roll_instructions
function instruct() {
  let n = e.get_n();
  document.querySelector('#dice_roll_instructions').textContent = `Roll ${n}d6 target t.`;
}

function main() {
  prepare_player_numbers_section();

  // work_in_progress
  console.log("dice_available " + e.get_dice());
  console.log("return of calcualte odds fn is ");
  console.log(calculate_odds(e.get_dice()));
}
main();
instruct();
