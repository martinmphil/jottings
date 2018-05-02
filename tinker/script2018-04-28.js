"use strict";

// we versus they for theory side

var e = (function () {
    var n=3; // Private Variable
    var us=13;
    var them=10;
    var us_adv=0.75;
    var them_adv=0.25
    console.log("from inside anon fn immediately run them " + [n, us, them, us_adv,them_adv]);

    var enc = {};// public object - returned at end of module
// check if typeof y === "number"
    enc.change_n = function (x) {
      console.log("this is a type of " + typeof x);
      typeof x === "number" ? n = x : n=n;
    };

    enc.change_us = function (x) {
      us = x;
    };

    enc.change_them = function (x) {
      them = x;
    };
// NEED REST OF changers
    enc.getState = function() {
        return [n, us, them, us_adv,them_adv];
    }

    return enc; // expose externally
}());

e.change_n("five");
e.change_us(11);
e.change_them(12);

//var theState = e.getState();
var theState = e.getState();
console.log("outside after change_them to twelve " +theState);



function main () {
  var para = document.createElement("p");
  var node = document.createTextNode("This is new.");
  para.appendChild(node);
  var element = document.getElementById("col");
  element.appendChild(para);
}

main();

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


// ----
function outer() {
    var name = "Kyle Simpson";
    return middle();

    // ********************

    function middle() {
        var street = "123 Easy St";
        var city = "JS'ville";
        var state = "ES";

        return function inner(){
            return [name,street,city,state];
        };
    }
}

var person = outer();
//----

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
