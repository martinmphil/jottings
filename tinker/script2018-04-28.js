"use strict";
/*
https://github.com/getify/Functional-Light-JS/blob/master/manuscript/ch7.md/#chapter-7-closure-vs-object
*/
function outer() {
    var x = 10;
    var y = 12;
    var z = 14;

    return function inner(){
        return [x,y,z];
    }
};

var point = outer();


// players_enclosure impure

function players_enclosure() {
  var n = 3;
  // return object
  return {
    set_n : function (x) {n=x;},
    get_n : () => n
  };
}

//players_enclosure.set_n(4);
//console.log(players_enclosure.get_n);


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
