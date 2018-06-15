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
function s_t_longlist(x) {
  return x.map( y => dice_s_t_pairs(y) ).reduce((a, b) => a.concat(b));
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
  var dice_available = [6, 8, 12, 20, 100]; // 6, 8, 12, 20, 100  n9 110 values
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
    let result = s_t_longlist(dice_available)
      .map ( ([y, z]) => [`${x}d${y} target ${z}`, force_ratio(x, y, z)] );
    enc['a' + x] = result.filter( ([j, k]) => pos_finite_predicate(k) );
    return chances(x - 1);
  };

//remove
  enc.get_state = () => [player_nbrs, us, them, adv_us,adv_them];

  return enc;
}());

function calculate_us_vs_them(us, them, adv_us, adv_them) {
  let force_multiplier = 1;
  let delta_adv = adv_us - adv_them;
  function logarithmic_scaling(delta){
    return 2 * Math.log(Math.abs(delta) + 1)
  }
  delta_adv > 0 ? force_multiplier = logarithmic_scaling(delta_adv) :
    delta_adv < 0 ? force_multiplier = ( 1 / logarithmic_scaling(delta_adv) ) :
      force_multiplier = force_multiplier;
  return (us / them) * force_multiplier;
}

function instructions(n, us_vs_them) {
  let fr_array = e['a' + n].map( ([x,y]) => y );
  let difference_array = fr_array.map( x => Math.abs(x - us_vs_them) );
  let least_difference = difference_array.reduce( (x, y) => Math.min(x, y) );
  // index of least difference
  let i = difference_array.indexOf(least_difference);
  return e['a' + n][i][0];
}

function instruct() {
  let us_vs_them = calculate_us_vs_them(
    e.get_us(), e.get_them(), e.get_adv_us(), e.get_adv_them()
  );
  let ndst = instructions(e.get_n(), us_vs_them);
  document.querySelector('#dice_roll_instructions').textContent =
    `Roll ${ndst}.`;
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

function prepare_keypads() {
  document.querySelectorAll('.nbr_keypad').forEach( i => {
    i.addEventListener('click', () => {
        keypad_button_fn(i.value);
      })
  })
}

function keypad_button_fn(x) {
  console.log('keypad_button_fn ' + x);
}

// remove
//e.change_n(4);
e.change_us(33);
e.change_them(22);
e.change_adv_us(3);
e.change_adv_them(2);
//var theState = e.get_state();
//console.log(theState);



function main() {
  e.force_ratio_recur();
  prepare_player_numbers_section();
  prepare_keypads()
  instruct();
}
main();

// remove
console.log('performance '+ performance.now());
