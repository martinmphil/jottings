var reset = function () {
    document.getElementById("n3").setAttribute("checked", "true");
    // TO REMOVE
    console.log("resetting");
};
reset();
var main = function () {
    // const x = document.forms.playerNbrs
    // const n = document.querySelector('input[name="playerNbrs"]:checked');
    var n = document
        .querySelector('input[name="playerNbrs"]:checked')
        .getAttribute("value");
    console.log(n);
    // debugger;
    document.getElementById("edict").innerText = "Po roll " + n;
};
main();
document.querySelector("form").addEventListener("change", main);
