// $ deno run --allow-write create_orunder_data.js

// n = number of players each rolling a dice
// d = number of sides on a polyhedral dice
// t = target number triggering success if any player rolls equal or under
// f = force-ratio

// interface Encounter {
//   n: number;
//   d: number;
//   t: number;
//   f: number;
// }

// const nArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const dice: number[] = [6, 8, 12, 20, 100];
const dice: number[] = [6, 8, 12, 20, 100];

// creates array of target numbers from one to d minus one
const targetArr = (d: number) => {
  return Array.from({ length: d - 1 }, (_, i) => i + 1);
};

// calculates force-ratio from probability
const force_ratio = (prob: number) => {
  let f: number;
  if (prob > 0.995) {
    // overwhelming 100:1 favourite
    f = 100;
  } else if (prob > 0.75) {
    f = 0.5 * (1 / (1 - prob));
  } else if (prob > 0.5) {
    f = 4 * prob - 1;
  } else {
    f = 2 * prob;
  }
  return parseFloat(f.toPrecision(4));
};

// creates Orunder_data element for one encounter
const encounter = (n: number, d: number, t: number) => {
  const prob = 1 - (1 - t / d) ** n;
  const f = force_ratio(parseFloat(prob.toPrecision(4)));
  return { n, d, t, f };
};

// generates all dice combinations for a specific number of players
const partyArr = (n: number, dice: number[]) => {
  const everyCombo = dice.flatMap((d) => {
    return targetArr(d).map((t) => {
      return encounter(n, d, t);
    });
  });
  // removes duplicate force-ratios "f"
  const results = everyCombo.filter((x, i, arr) => {
    return arr.map((y) => y.f).indexOf(x.f) === i;
  });
  return results;
};

// generates unique data for full range of player numbers
const orunderData = nArr.flatMap((n) => {
  return partyArr(n, dice);
});

// TO REMOVE
console.log(orunderData);

const encoder = new TextEncoder();
await Deno.writeFile(
  "orunder_data.json",
  encoder.encode(JSON.stringify(orunderData))
);
