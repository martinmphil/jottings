"use strict";
function force_ratio(n, s, t) {
  let p = (1 - (((t-1)/s)**n));
  let result;
  p <= 0.5 ? result = (2 * p)
    : p > 0.75 ? result = (1 / (2 - 2 * p)) : result = ((4 * p) - 1);
  return result;
}
function range_t(s) {
  let result = [];
  (function range_recur(x) {
    if (x <= 1) return result;
    result[x - 2] = x;
    return range_recur(x - 1);
  })(s);
  return result.reverse();
}
function dice_s_t_pairs(x) {
  return range_t(x).map( y => [x, y] );
}
function unique_prob_array(x) {
  return R.uniqBy( ([s,t]) => (1 - ((t-1)/s)),
    x.map( y => dice_s_t_pairs(y) ).reduce((a, b) => a.concat(b)) );
}
function pos_finite_predicate(x) {
  if (x > 0 && Number.isFinite(x)) {
    return true;
  }
}
// [1]
var e = (function () {
  var max_player_nbrs = 9;
  var player_nbrs = 3;
  var us = 10;
  var them = 10;
  var adv_us = 0;
  var adv_them = 0;
  var dice_available = [6, 8, 12, 20]; // 6, 8, 12, 20, 100  n9 110 values
  var enc = {};
  enc.change_n = x => Number.isInteger(x) && x > 0 && x < max_player_nbrs ?
    player_nbrs = x : player_nbrs = player_nbrs;
  enc.change_us = x => pos_finite_predicate(x) ? us = x : us = us;
  enc.change_them = x => pos_finite_predicate(x) ? them = x : them = them;
  enc.change_adv_us = x => Number.isFinite(x) ? adv_us = x : adv_us = adv_us;
  enc.change_adv_them = x => Number.isFinite(x) ? adv_them = x : adv_them = adv_them;
  enc.get_n = () => player_nbrs;
  enc.get_us = () => us;
  enc.get_them = () => them;
  enc.get_adv_us = () => adv_us;
  enc.get_adv_them = () => adv_them;
  // [2]
  enc.force_ratio_recur = function chances(x = max_player_nbrs) {
    if (x < 1) return;
    let result = unique_prob_array(dice_available)
      .map ( ([y, z]) => [`${x}d${y} target ${z}`, force_ratio(x, y, z)] );
    enc['a' + x] = result.filter( ([j, k]) => pos_finite_predicate(k) );
    return chances(x - 1);
  };

//remove
  enc.get_state = () => [player_nbrs, us, them, adv_us,adv_them];

  return enc;
}());

function calculate_us_vs_them(us, them, adv_us, adv_them) {
//NEEDS PROPER MATHS
  return us / them;
}

function instructions(n, us_vs_them) {
  let fr_array = e['a' + n].map( ([x,y]) => y );
  console.log('inside instructions function ');
  console.log(fr_array);
    // perform proper look up
  return e.a3[0][0];
}

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

function instruct() {
  let us_vs_them = calculate_us_vs_them(
    e.get_us(), e.get_them(), e.get_adv_us(), e.get_adv_them()
  );
  let ndst = instructions(e.get_n(), us_vs_them);
  document.querySelector('#dice_roll_instructions').textContent =
    `Roll ${ndst}.`;
}



// remove
//e.change_n(4);
e.change_us(11);
e.change_them(12);
e.change_adv_us(1);
e.change_adv_them(0.75);
//var theState = e.get_state();
//console.log(theState);



function main() {
  e.force_ratio_recur();
  prepare_player_numbers_section();
  instruct();
}
main();

// remove
var n1f = e.a3.map( ([x, y]) => y );
//console.log('n1f');
//console.log(n1f);
var n1i = e.a3.map( ([x, y]) => x );
//console.log('n1i');
//console.log(n1i);

function find_nearest_we_vs_they(n, us, them) {
  let array_title = e['a' + n];
  return array_title;
}

var vvv = calculate_us_vs_them(e.get_us(), e.get_them(), e.get_adv_us(), e.get_adv_them() );
console.log('calculate_us_vs_them ');
console.log(vvv);
