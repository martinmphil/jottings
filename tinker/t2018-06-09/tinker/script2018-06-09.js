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
function unique_prob_array(x) {
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
function final_game_data(n, p) {
  return p.map( ([x, y]) => [x, y, force_ratio(x, y)]);
}

function pos_finite_predicate(x) {
  if (x > 0 && Number.isFinite(x)) {
    return true;
  }
}
// [1]
var e = (function () {
  var max_player_nbrs = 9;
  var dice_available = [6, 8, 12, 20, 100]; // ADD 12, 20, 100!!!!!!!  110 values in 5 dice includeing d100
  var enc = {};
  enc.force_ratio_array_recur = function chances(x = max_player_nbrs) {
    if (x < 1) return;
    //console.log(x);
    let result = final_game_data(x, unique_prob_array(dice_available)).map(
      ([j, k]) => [`${x}d${j} target ${k}`, force_ratio(x, j, k)]
    );
    enc["n" + x] = result.filter( ([l, m]) => pos_finite_predicate(m) );
    return chances(x - 1);
  };

  return enc;
}());

function main() {
  e.force_ratio_array_recur();
}
main();
// to remove
var vvv = [6, 8, 12, 20, 100];
console.log('range_t ');
console.log(range_t(6));
console.log('dice_s_t_pairs');
console.log(
  dice_s_t_pairs(range_t(6))
);
console.log('e.n3');
console.log(e.n3);
console.log('e.n9');
console.log(e.n9);
