"use strict";

let numer000 = 1;
let denom000 = 2;

let numer001 = 8;
let denom001 = 16;

function fractionalTest (j,k,l,m) {
  let p = j/k;
  let q = l/m;
  return p * (1/q);
}


var a = fractionalTest(numer000, denom000, numer001, denom001);

console.log(a);

// grabbing a value from within an arg array
function fn ([x,y,...args] = []){
  console.log(y);
}

fn ([1,2,3]); //2
