const reset = () => {
  document.getElementById("n3").setAttribute("checked", "true");
};
reset();

const main = () => {
  const n = document
    .querySelector('input[name="playerNbrs"]:checked')
    .getAttribute("value");

  document.getElementById("edict").innerText = `Po roll ${n}`;
};

main();

document.querySelector("form").addEventListener("change", main);
