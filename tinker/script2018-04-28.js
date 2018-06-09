"use strict";
// [2]
function dice_s_t_pairs(...args) {
  const s = args[0];
  return args.map(x => [s, x]);
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

function all_s_t_pairs(x) {
  return R.uniqBy( ([s,t]) => (1 - ((t-1)/s)),
    x.map(y => dice_s_t_pairs(...range_t(y))).reduce((a, b) => a.concat(b)) );
}

function force_ratio(n, s, t) {
  let p = (1 - (((t-1)/s)**n));
  let result;
  p <= 0.5 ? result = (2 * p)
    : p > 0.75 ? result = (1 / (2 - 2 * p)) : result = ((4 * p) - 1);
  return result;
}

function s_t_force_ratios(n, p) {
  return p.map( ([x, y]) => [x, y, force_ratio(x, y)]);
}




function pos_finite_predicate(x) {
  if (x > 0 && Number.isFinite(x)) {
    return true;
  }
}

// [1]
var e = (function () {
  var player_nbrs = 3;
  var max_player_nbrs = 9;
  var us = 10;
  var them = 10;
  var adv_us = 0;
  var adv_them = 0;
  var dice_available = [6, 8, 12, 20, 100]; // ADD 12, 20, 100!!!!!!!  110 values in 5 dice includeing d100
  var enc = {};
  enc.change_n = x => Number.isInteger(x) && x > 0 && x < max_player_nbrs ?
    player_nbrs = x : player_nbrs = player_nbrs;
  enc.change_us = x => pos_finite_predicate(x) ? us = x : us = us;
  enc.change_them = x => pos_finite_predicate(x) ? them = x : them = them;
  enc.change_adv_us = x => Number.isFinite(x) ? adv_us = x : adv_us = adv_us;
  enc.change_adv_them = x => Number.isFinite(x) ? adv_them = x : adv_them = adv_them;
  enc.get_n = () => player_nbrs;
  enc.get_state = () => [player_nbrs, us, them, adv_us,adv_them];
  enc.get_dice = () => dice_available;



  // work_in_progress
  //NB can remove enc.get_dice when finished
  // can also delete this next line
  enc.get_max_n = () => max_player_nbrs;


  enc.force_ratio_arrays_recur = function chances(x = max_player_nbrs) {
    if (x < 1) return;
    //console.log(x);
    let result = s_t_force_ratios(x, all_s_t_pairs(dice_available)).map(
      ([j, k]) => [`${x}d${j} target ${k}`, force_ratio(x, j, k)]
    );
    enc["n" + x] = result.filter( ([l, m]) => pos_finite_predicate(m) );
    return chances(x - 1);
  };


  return enc;
}());

// work_in_progress
e.change_n(4);
e.change_us(-11);
e.change_them(12);
e.change_adv_us(1);
e.change_adv_them(0.75);
var theState = e.get_state();
//console.log("outside after change_them to twelve " + theState);


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

//to remove
// dice_roll_instructions
function instruct() {
  let n = e.get_n();
  document.querySelector('#dice_roll_instructions').textContent = `Roll ${n}d6 target t.`;
}
function create_Map() {
  let d = dice_chances(e.get_dice());
  return d;
}






function main() {
  e.force_ratio_arrays_recur();
  //s_t_force_ratios(e.get_max_n(), all_s_t_pairs(e.get_dice()));
  prepare_player_numbers_section();



  // work_in_progress

  //console.log("return of s_t_force_ratios fn is ");
  //console.log(s_t_force_ratios(e.get_max_n(), all_s_t_pairs(e.get_dice())));

  //console.log("dice_available " + e.get_dice());
  //console.log("return of all_s_t_pairs fn is ");
  //console.log(all_s_t_pairs(e.get_dice()));

  // create_Map
  //console.log("return of chance fn is ");
  //console.log(e.create_Map(e.get_max_n()));
}
main();

// to remove
instruct();
console.log(e.n3);
