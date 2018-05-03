"use strict";
// [1]
var e = (function () {
  var n = 3;
  var us = 10;
  var them = 10;
  var adv_us = 0;
  var adv_them = 0;
  console.log("initial " + [n, us, them, adv_us,adv_them]);
  var enc = {};
  enc.change_n = function (x) {
    Number.isInteger(x) ? n = x : n = n;
  };
  enc.change_us = function (x) {
    x > 0 ? us = x : us = us;
  };
  enc.change_them = function (x) {
    x > 0 ? them = x : them = them;
  };
  enc.change_adv_us = function (x) {
    x > 0 ? adv_us = x : adv_us = adv_us;
  };
  enc.change_adv_them = function (x) {
    x > 0 ? adv_them = x : adv_them = adv_them;
  };
  enc.get_n = function () {
    return n;
  };
  enc.getState = function() {
    return [n, us, them, adv_us,adv_them];
  };
  return enc;
}());

// work_in_progress
e.change_n(6);
e.change_us("11");
e.change_them(12);
e.change_adv_us(1);
e.change_adv_them(0.75);
//var theState = e.getState();
var theState = e.getState();
console.log("outside after change_them to twelve " + theState);



function main () {
  // initiate
  document.querySelector('#pbttn' + e.get_n()).classList.remove('unselectedBttn');
  document.querySelector('#pbttn' + e.get_n()).classList.add('selectedBttn');
  document.querySelector('#pNbrsSection').querySelectorAll('input[type=button]').forEach(function(i) {
    i.addEventListener('click', function () {
      e.change_n(parseInt(i.value));
      document.querySelector(".selectedBttn").classList.add("unselectedBttn");
      document.querySelector(".selectedBttn").classList.remove("selectedBttn");
      i.classList.remove('unselectedBttn');
      i.classList.add('selectedBttn');
      //to_remove
      console.log('change_n to ' + e.get_n());
    });
  });


}
main();



// fractionalTest
let numer000 = 1;
let denom000 = 2;

let numer001 = 8;
let denom001 = 16;

function fractionalTest (j,k,l,m) {
  let p = j/k;
  let q = l/m;
  return p * (1/q);
}

console.log(fractionalTest(numer000, denom000, numer001, denom001));

// grab_my_value_from_arg_array
function grab_my_value_from_arg_array ([x,y,...args] = []){
  console.log(y);
}
grab_my_value_from_arg_array ([1,2,3]); //2
