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

// let orunder_data = { n: 0, d: 0, t: 0, f: 0 };

// const nArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nArr: number[] = [1, 2];

// const polyhedrals: number[] = [6, 8, 12, 20, 100];
const dice: number[] = [6, 8, 12];

const targetArr = (d: number) => {
  return Array.from({ length: d - 1 }, (_, i) => i + 1);
};

const force_ratio = (probability: number) => {
  return probability;
};

// creates Orunder_data element for one encounter
const encounter = (n: number, d: number, t: number) => {
  const idealProb = (d / t) ** n;
  const realProb = parseFloat(idealProb.toPrecision(4));
  const f = force_ratio(realProb);
  return { n, d, t, f };
};

// Generates all dice combinations for a specific number of players
const partyArr = (n: number, dice: number[]) => {
  const everyCombo = dice.flatMap((d) => {
    return targetArr(d).map((t) => {
      return encounter(n, d, t);
    });
  });
  // removes duplicates
  const result = everyCombo.filter((x, i, arr) => {
    return arr.map((y) => y.f).indexOf(x.f) === i;
  });
  return result;
};

// Generates unique data for range of player numbers
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
