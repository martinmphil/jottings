var instruct = function (n, us, them) {
    if (n === void 0) { n = "10"; }
    if (us === void 0) { us = "10"; }
    if (them === void 0) { them = "10"; }
    return "Po roll " + n + ". Also us is " + us + " and them is " + them + ".";
};
// The reset button requires this fn to reset the output html tag.
var setup = function () {
    document.querySelector("output").innerText = "Roll 3d20 =orUnder 4";
};
setup();
