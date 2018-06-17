'use strict';
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
const e = (function () {
  var max_player_nbrs = 6;
  var player_nbrs = 3;
  var us = 10;
  var them = 10;
  var adv_us = 0;
  var adv_them = 0;
  var dice_available = [6, 8, 12, 20, 100]; // 6, 8, 12, 20, 100  n9 110 values
  var enc = {};
  enc.reset = {n:player_nbrs, u:us, t:them, ua:adv_us, ta:adv_them};
  enc.change_n = x => Number.isInteger(x) && x > 0 && x <= max_player_nbrs ?
    player_nbrs = x : player_nbrs = player_nbrs;
  enc.change_us = x => pos_finite_predicate(x) ? us = x : us = us;
  enc.change_them = x => pos_finite_predicate(x) ? them = x : them = them;
  enc.change_us_adv = x => Number.isFinite(x) ? adv_us = x : adv_us = adv_us;
  enc.change_them_adv = x => Number.isFinite(x) ? adv_them = x : adv_them = adv_them;
  enc.get_n = () => player_nbrs;
  enc.get_us = () => us;
  enc.get_them = () => them;
  enc.get_us_adv = () => adv_us;
  enc.get_them_adv = () => adv_them;
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
  // index of least different
  let i = difference_array.indexOf(least_difference);
  return e['a' + n][i][0];
}
function instruct() {
  let us_vs_them = calculate_us_vs_them(
    e.get_us(), e.get_them(), e.get_us_adv(), e.get_them_adv()
  );
  let ndst = instructions(e.get_n(), us_vs_them);
  document.querySelector('#dice_roll_instructions').textContent =
    `Roll ${ndst}.`;
}

function reset_button(){
  e.change_n(e.reset.n);
  e.change_us(e.reset.u);
  e.change_them(e.reset.t);
  e.change_us_adv(e.reset.ua);
  e.change_them_adv(e.reset.ta);
  document.querySelector('.pickedBttn').classList.add('availBttn');
  document.querySelector('.pickedBttn').classList.remove('pickedBttn');
  prepare_player_numbers_section();
  document.querySelector('#us_input').value = e.reset.u;
  document.querySelector('#them_input').value = e.reset.t;
  document.querySelector('#us_adv_input').value = e.reset.ua;
  document.querySelector('#them_adv_input').value = e.reset.ta;
  instruct();
}
function prepare_player_numbers_section() {
  document.querySelector('#pbttn' + e.get_n()).classList.remove('availBttn');
  document.querySelector('#pbttn' + e.get_n()).classList.add('pickedBttn');
  document.querySelectorAll('#pNbrs > input[type=button]').forEach( i => {
    i.addEventListener('click', () => {
      e.change_n(parseInt(i.value));
      instruct();
      document.querySelector(".pickedBttn").classList.add("availBttn");
      document.querySelector(".pickedBttn").classList.remove("pickedBttn");
      i.classList.remove('availBttn');
      i.classList.add('pickedBttn');
    });
  });
}
function prepare_keypads() {
  document.querySelectorAll('.us_nbr_keypad').forEach( i => {
    i.addEventListener('click', () => {
        us_keypad_button_fn(i.value);
      });
  });
  document.querySelectorAll('.them_nbr_keypad').forEach( i => {
    i.addEventListener('click', () => {
        them_keypad_button_fn(i.value);
      });
  });
}
function us_keypad_button_fn(x) {
  let el = document.querySelector('#us_input');
  let result_string = el.value + x;
  e.change_us(Number.parseFloat(result_string));
  el.value = result_string;
  instruct();
}
function them_keypad_button_fn(x) {
  let el = document.querySelector('#them_input');
  let result_string = el.value + x;
  e.change_them(Number.parseFloat(result_string));
  el.value = result_string;
  instruct();
}
function us_clear_button() {
  let el = document.querySelector('#us_input');
  let result_string =  el.value.slice(0, -1);
  e.change_us(Number.parseFloat(result_string));
  el.value = result_string;
  instruct();
}
function them_clear_button() {
  let el = document.querySelector('#them_input');
  let result_string =  el.value.slice(0, -1);
  e.change_them(Number.parseFloat(result_string));
  el.value = result_string;
  instruct();
}
// remove
//e.change_n(4);
//e.change_us(33);
//e.change_them(22);
//e.change_us_adv(2);
//e.change_them_adv(2);
//var theState = e.get_state();
//console.log(theState);

function us_input() {
  let el = document.querySelector('#us_input');
  e.change_us(Number.parseFloat(el.value));
  el.addEventListener('input', () => {
    e.change_us(Number.parseFloat(el.value));
    instruct();
  });
}
function them_input() {
  let el = document.querySelector('#them_input');
  e.change_them(Number.parseFloat(el.value));
  el.addEventListener('input', () => {
    e.change_them(Number.parseFloat(el.value));
    instruct();
  });
}
function us_adv_input() {
  let el = document.querySelector('#us_adv_input');
  e.change_us_adv(Number.parseFloat(el.value));
  el.addEventListener('input', () => {
    e.change_us_adv(Number.parseFloat(el.value));
    instruct();
  });
}
function them_adv_input() {
  let el = document.querySelector('#them_adv_input');
  e.change_them_adv(Number.parseFloat(el.value));
  el.addEventListener('input', () => {
    e.change_them_adv(Number.parseFloat(el.value));
    instruct();
  });
}

function main() {
  e.force_ratio_recur();
  prepare_player_numbers_section();
  prepare_keypads();
  us_input();
  them_input();
  us_adv_input();
  them_adv_input();
  document.querySelector('#reset_button').addEventListener( 'click', reset_button );
  document.querySelector('#us_clear_button').addEventListener( 'click', us_clear_button )
  document.querySelector('#them_clear_button').addEventListener( 'click', them_clear_button )
  instruct();
}
main();

// remove
console.log('performance '+ performance.now());
var theState = e.get_state();
console.log(theState);
