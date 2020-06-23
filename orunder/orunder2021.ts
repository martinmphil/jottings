const instruct = (n = "10", us = "10", them = "10") => {
  return `Po roll ${n}. Also us is ${us} and them is ${them}.`;
};

// The reset button requires this fn to reset the output html tag.
const setup = () => {
  document.querySelector("output").innerText = "Roll 3d20 =orUnder 4";
};
setup();
