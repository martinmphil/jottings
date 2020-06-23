const reset = () => {
  document.getElementById("n3").setAttribute("checked", "true");
};
reset();

const submitFn = (e: Event) => {
  e.preventDefault;
  return false;
};

const instruct = () => {
  let n = 3;
  n = parseInt(
    document
      .querySelector('input[name="playerNbrs"]:checked')
      .getAttribute("value")
  );

  let us = 10;
  let us_input = document.getElementById("us_input") as HTMLInputElement;
  us = parseFloat(us_input.value);

  // debugger;

  document.getElementById("edict").innerText = `Po roll ${n}. Also us is ${us}`;
};

instruct();

document.querySelector("form").addEventListener("change", instruct);
document.getElementById("us_input").addEventListener("input", instruct);
